const IncomeSchema = require("../models/ingreso.model")


exports.addIncome = async (req, res) => {
    try {
        icome = await IncomeSchema.create(req.body);
        res.json(icome);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200)
        res.json(incomes)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

exports.deleteIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.deleteOne({_id: req.params.id})
        res.json(income)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}