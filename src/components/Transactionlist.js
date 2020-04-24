import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const Transactionlist = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <>
        <h5>History</h5>
        <div className="card">
        { (transactions) ? 
            (<ul>
                { transactions.map(transaction => (<li key={transaction.id} className="opaq"> <Transaction transaction={transaction}/></li>)
                )}
            </ul>)
            : 
            (<h4 className="card-content">No transaction history</h4>)   
        }
        </div>
        </>
    )
}
