import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => { return transaction.amount });
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div className="row">
            <div className="col s6">
                <div className="card lime lighten-3">
                    <h4 className="card-title text-darken-3"><b>Your Balance</b></h4>
                    <h3 className="card-content black-text">$ <b>{total}</b></h3>
                </div>
            </div>
            
        </div>
    )
};

