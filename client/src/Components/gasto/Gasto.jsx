import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import IngresoItem from '../ingreso/IngresoItem';
import GastoForm from '../gasto/GastoForm';
import { useNavigate } from 'react-router-dom';
import '../../styles/stylesheet.css';

const Gasto = ()=> {
    const {expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() => {
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getExpenses()
    }, [getExpenses])
    return (
        <div className='container'>
            <div className="d-flex justify-content-around">
                <div>
                    <GastoForm />
                    <h2 className="total-income p-3 ">Total: <span>Gs. {totalExpenses()}</span></h2>
                </div>
                <div className='w-50'>
                    <div className="gastoUser">
                            <h2 className='text-center'>Historial</h2>
                        {expenses.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return <IngresoItem key={_id} id={_id} title={title} description={description} amount={amount} date={date} type={type} category={category} deleteItem={deleteExpense} />
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Gasto