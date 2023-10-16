import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import inicio from "../styles/inicio.jpg";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            navigate("/login");
        }
    }, []);

    return (
        <div className='home'>
            <div className="textFinanza">
                <h1 className="text-primary font-weight">Gestor De Finanza Personal</h1>
                <p className="text-dark-emphasis fs-5">Nuestro objetivo es ayudarte a tomar el control de tus finanzas personales de manera sencilla y efectiva. Sabemos lo importante que es llevar un registro adecuado de tus ingresos y gastos para tomar decisiones financieras informadas y alcanzar tus metas económicas.</p>
            </div>
            <div className="imgFinanza">
                <img className="img" src={inicio} alt='Home'/>
            </div>
        </div>
    )
}

export default Home