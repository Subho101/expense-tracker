import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <div className="row">
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit} className="col s12">
            <div className="col s6">
                <label htmlFor="text">Text</label>
                <input type="text" className="input-field col s12" value={text} onChange={e => setText(e.target.value)} placeholder="enter text" />
            </div>
            <div className="col s6">
                <label htmlFor="amount">Amount <b>(positive - income,negative - expense)</b></label>
                <input type="text" className="input-field col s12" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amout" />
            </div>
            <button className="btn waves-effect waves-light">Add Transaction</button>
        </form>  
        </div>
    )
}


