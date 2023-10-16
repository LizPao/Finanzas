import React from 'react'
import { useRouteError } from 'react-router-dom'
import PageNotFund from '../styles/notFund.gif'
const NotFund = () => {
    const errors = useRouteError();
    return (
        <div className='container mt-5'>
            <div className='mx-auto alert alert-darger'>{errors.statusText || errors.message}</div>
            <hr />
            <img className='w-50 mx-auto d-block' src={PageNotFund} alt='page not fund'/>
        </div>
    )
}

export default NotFund