import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/Context';

const IngresoForm = () =>{
    const { addIncome, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input type="text" value={title} name={'title'} placeholder="Titulo del ingreso" onChange={handleInput('title')} required/>
            </div>
            <div className="input-control">
                <input value={amount} type="number" name={'amount'} placeholder={'Monto'} onChange={handleInput('amount')} required/>
            </div>
            <div className="input-control">
                <DatePicker id='date' placeholderText='Ingrese fecha' selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => { 
                    setInputState({ ...inputState, date: date })
                }} required />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Categoria</option>
                    <option value="salary">Salario</option>
                    <option value="investments">Inversiones</option>
                    <option value="stocks">Ahorro</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Ingrese una descripcion' id="description" cols="30" rows="4" onChange={handleInput('description')} required></textarea>
            </div>
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default IngresoForm