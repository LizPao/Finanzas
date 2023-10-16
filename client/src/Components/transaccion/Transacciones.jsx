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
                <h1>Transaccioneshhh</h1>
                <div className="stats-con d-flex justify-content-around">
                    <div className="chart-con ">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Ingreso :  {totalIncome()}</h2>
                            </div>
                            <div className="expense">
                                <h2>Total Gasto:  {totalExpenses()}</h2>
                            </div>
                            <div className="balance">
                                <h2>Total Balance:  {totalBalance()}</h2>
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