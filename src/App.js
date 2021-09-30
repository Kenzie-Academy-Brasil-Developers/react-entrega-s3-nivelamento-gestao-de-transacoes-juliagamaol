import './App.css';
import { useState } from 'react';
import QuantityFruits from './components/QuantifyFruits';
import TotalOut from './components/TotalOut'
import FormOutEntry from './components/FormOutEntry'
import DisplayAll from './components/DisplayAll';
function App() {
  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])
  const[show, setShow] = useState(true)

  const entry = transactions.filter(item=>{
    return item.quantity > 0
  })
  const out = transactions.filter(item=>{
    return item.quantity < 0
  })
  return (
    <div className="App">
      <header className="App-header">
        <QuantityFruits entry={entry} out={out}/>
        <TotalOut out={out}/>
        <FormOutEntry transactions={transactions} setTransactions={setTransactions}/>
        <DisplayAll 
        entry={entry}
        out={out}
        transactions={transactions}
        show={show}
        setShow={setShow}/>
      </header>
    </div>
  );
}

export default App;
