import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
import IngresoForm from './IngresoForm';
import IngresoItem from './IngresoItem';

const Ingreso = () => {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() => {
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getIncomes()
    }, [getIncomes])

    return (
        <div className='container'>
            <div className="d-flex justify-content-around">
                <div>
                    <IngresoForm />
                    <h2 className="total-ingreso p-3">Total Ingreso: <span>Gs. {totalIncome()}</span></h2>
                </div>
                <div className="w-50">
                    <div className="gastoUser">
                        <h2 className='text-center'>Historial</h2>
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return <IngresoItem key={_id} id={_id} title={title} description={description} amount={amount} date={date} type={type} category={category} deleteItem={deleteIncome} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ingreso