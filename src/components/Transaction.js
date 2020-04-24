import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '';
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div className="card-content box" onClick={() => deleteTransaction(transaction.id)}>
          <div className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <span className="card-content left">{transaction.text}</span>
            <span className="card-title right">{sign} ${Math.abs(transaction.amount)}</span>
            <div id="clear"></div>
          </div>         
        </div>
    )
}

