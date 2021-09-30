import React, { useState } from 'react'

export default function FormOutEntry({transactions,setTransactions}) {
    const[name, setName] = useState('')
    const[quantity, setQuantity] = useState('')
    const[price, setPrice] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        let newFruit = {
            name:name,
            quantity:quantity*1,
            price:price*1
        }
        setName('')
        setQuantity('')
        setPrice('')
        setTransactions([...transactions,newFruit])
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Fruta" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Quantidade" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <input placeholder="Preço" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
    )
}
