const ExpenseSchema = require("../models/gasto.model")


exports.addExpense = async (req, res) => {
    try {
        expense = await ExpenseSchema.create(req.body);
        res.json(expense);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200)
        res.json(expense)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.deleteOne({_id: req.params.id})
        res.json(expense)
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}