import React from 'react'

export default function QuantityFruits({entry,out}) {
    const quantiEntry = entry.reduce((a,b)=>a+b.quantity,0)
    const quantiOut = out.reduce((a,b)=>a+b.quantity,0)
    return (
        <div>
            <p>Quantidade de entrada: {quantiEntry}</p>
            <p>Quantidade de saída: {quantiOut}</p>
        </div>
    )
}
