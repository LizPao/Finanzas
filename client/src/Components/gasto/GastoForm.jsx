import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/Context';
import '../../styles/stylesheet.css';

const GastoForm = () => {
    const { addExpense, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        date: '',
        category: '',
        title: '',
        amount: '',
        description: '',
    })

    const {date, category, title, amount, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            date: '',
            category: '',
            title: '',
            amount: '',
            description: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} className='containerForm'>
            {error && <p className='error'>{error}</p>}
            <h2 className='mb-5 text-center'>Mis Gastos</h2>
            <div className='contenedor'>
            <div className="selects input-control">
                <select className="opc mb-3 p-2 rounded-pill border border-primary" required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Categoria</option>
                    <option value="education">Educacion</option>
                    <option value="groceries">Despensa</option>
                    <option value="health">Salud</option>
                    <option value="other">Otros</option>
                </select>
            </div>
            <div className="input-control">
                    <DatePicker className="inputFecha mb-3 p-2 rounded-pill border border-primary" id='date' type='date' placeholderText='10/10/2023' selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                        }} required
                    />
                </div>
            </div>
            <div className="input-control">
                <input className="input mb-3 w-100 rounded-pill p-3 border border-primary" type="text" value={title} name={'title'} placeholder="Titulo del gasto" onChange={handleInput('title')} required />
            </div>
            <div className="input-control">
                <input className="input mb-3 w-100 rounded-pill p-3 border border-primary" value={amount} type="number" name={'amount'} placeholder={'Monto'} onChange={handleInput('amount')} required/>
            </div>
            <div className="input-control">
                <textarea className="w-100 rounded-2 mb-3 p-3 border border-primary" name="description" value={description} placeholder='Agregue una descripcion' id="description" cols="30" rows="4" onChange={handleInput('description')} required></textarea>
            </div>
            <button className=" btnAdd btn btn-primary">Agregar</button>
        </form>
    )
}

export default GastoForm