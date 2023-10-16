const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.login = async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({ username });
        if (!user)
            return response.json({ msg: "Nombre de usuario o contraseña incorrecta", status: false });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return response.json({ msg: "Nombre de usuario o contraseña incorrecta", status: false });
            delete user.password;
            return response.json({ status: true, user });
    } catch (error) {
        response.status(400)
        response.json(error)
    }
};

module.exports.register = async (request, response) => {
    try {
        const { username, email, password } = request.body;
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck)
            return response.json({ msg: "Usuario ya existe", status: false });
        const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return response.json({ msg: "Email ya existe", status: false });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        delete user.password;
        return response.json({ status: true, user });
    } catch (error) {
        response.status(400)
        response.json(error)
    }
};

module.exports.getUser = async (request, response) => {
    try {
        const user = await User.findOne({ _id: request.params.id })
        response.json(user)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllUsers = async (request, response) => {
    try {
        const users = await User.find({ _id: { $ne: request.params.id } }).select([
            "email",
            "username",
            "_id",
        ]);
        return response.json(users);
    } catch (error) {
        response.status(400)
        response.json(error)
    }
};
