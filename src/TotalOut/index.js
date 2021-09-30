import React from 'react'

export default function TotalOut({out}) {
    const totOut = out.reduce((a,b)=>a+b.price,0)
    return (
        <div>
            <p>Total de saídas: R$ {totOut.toFixed(2)}</p>
        </div>
    )
}
