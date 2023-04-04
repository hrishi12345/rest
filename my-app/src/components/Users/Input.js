import React from 'react'
import { useState } from 'react'
function Input(props){
    const [intialKey,setintialKey]=useState('')
    const [intialPrice,setintialPrice]=useState('')
    const [intialDish,setintialDish]=useState('')
    const [intialTable,setintialTable]=useState('Table1')
    const changeKey=(event)=>{
        setintialKey(event.target.value)
    }
    const changePrice=(event)=>{
        setintialPrice(event.target.value)
    }
    const changeDish=(event)=>{
        setintialDish(event.target.value)
    }
    const changeTable=(event)=>{
        setintialTable(event.target.value)
    }
    const data=(event)=>{
        event.preventDefault()
        props.onAddUser(intialKey,intialPrice,intialDish,intialTable)
        setintialKey('')
        setintialDish('')
        setintialPrice('')
        setintialTable('Table1')
    }
    return(
        <form onSubmit={data}>
            <label htmlFor="key" >Unique order ID</label>
            <input id='key' type='text' value={intialKey} onChange={changeKey}></input>
            <label htmlFor='Price' >Price</label>
            <input id='Price' type='number' value={intialPrice} onChange={changePrice}></input>
            <label htmlFor="dish">Dish</label>
            <input id='dish' type='text' value={intialDish} onChange={changeDish}></input>
            <label htmlFor="table">Table</label>
            <select id="table" value={intialTable} onChange={changeTable}>
            <option value="Table1">Table1</option>
            <option value="Table2">Table2</option>
            <option value="Table3">Table3</option>
            </select>
            <button type='submit'>Submit</button>
            
        </form>
        
    )
}
export default Input