import React from 'react'
import { dateFormat } from '../../utils/dateFormat';
import { RiDeleteBinLine } from 'react-icons/ri';


const IngresoItem =({ id, title, amount, date, description, deleteItem}) => {
    
    return (
        //historial de ingreso
        <>
            <h5>{title}</h5>
            <div className='d-flex justify-content-between mb-2'>
                <p className='me-5'> {amount}</p>
                <p className='me-5'> {dateFormat(date)}</p>
                <p>{description} </p>
                <button className='border-0 mb-4' onClick={() => deleteItem(id)}><RiDeleteBinLine color='red' /></button>
            </div>
            <hr />
        </>
    )
}

export default IngresoItem