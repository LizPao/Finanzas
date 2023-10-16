import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context';
import Historial from '../../historial/HistorialReciente';
import Chart from '../Chart/Chart';
import { useNavigate } from 'react-router-dom';

const Transacciones =()=> {
    const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    const navigate = useNavigate();

    useEffect(() => {
        //para prroteger la ruta
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-center mb-3'>Transacciones</h1>
                <div className="stats-con d-flex justify-content-around">
                    <div className="chart-con ">
                        <Chart />
                        <div className="amount-con">
                            <div className="income total-ingreso p-2">
                                <h4>Total de Ingresos: Gs. <span> {totalIncome()} </span></h4>
                            </div>
                            <div className="expense total-income p-2">
                                <h4>Total de Gastos: Gs. <span> {totalExpenses()} </span></h4>
                            </div>
                            <div className="balance p-2">
                                <h4>Saldo Total: Gs. <span>{totalBalance()}</span> </h4>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <Historial />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Transacciones