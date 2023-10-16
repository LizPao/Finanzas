import React, { useContext, useState } from "react"
import axios from 'axios'

const Context = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calcular los ingresos
    const addIncome = async (income) => {
        try{
        await axios.post(`${process.env.REACT_APP_API_URL}/addIncome`, income)
        }catch (err){
            setError(err.response.data.message)
        }
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getIncomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/deleteIncome/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
            //Math.round(totalIncome.percent)
        })
        
        return totalIncome;
    }


    //carcular gastos
    const addExpense = async (income) => {
        try{
        await axios.post(`${process.env.REACT_APP_API_URL}/addExpense`, income)
        }catch (err){
            setError(err.response.data.message)
        }
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getExpenses`)
        setExpenses(response.data)
        //console.log(response.data)
    }

    const deleteExpense = async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/deleteExpense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    //balance
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <Context.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(Context)
}