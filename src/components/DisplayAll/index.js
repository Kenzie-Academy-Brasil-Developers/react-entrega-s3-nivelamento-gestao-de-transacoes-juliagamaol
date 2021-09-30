import React from 'react'

export default function DisplayAll({entry,out,transactions,show,setShow}) {
    return (
        <div>
            <h2>Todas as movimentações</h2>
            {transactions.map((item,index)=>{
                return(
                    <ul>
                        <li key={index}>Nome:{item.name},qtd:{item.quantity},valor:R${item.price}</li>
                    </ul>
                )
            })}

            <div>
                {show ? (
                   <div>
                       <button onClick={()=>setShow(!show)}>Mostrar saídas</button>
                       {entry.map((item,index)=>{
                           return (
                               <ul>
                                  <li key={index}>Nome:{item.name},qtd:{item.quantity},valor:R${item.price}</li>
                               </ul>
                           )
                       })}
                   </div>
                ):(
                    <div>
                        <button onClick={()=>setShow(!show)}>Mostrar entradas</button>
                        {out.map((item,index)=>{
                           return (
                               <ul>
                                  <li key={index}>Nome:{item.name},qtd:{item.quantity},valor:R${item.price}</li>
                               </ul>
                           )
                       })}
                    </div>
                )}
            </div>
        </div>
    )
}
