import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2)

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2)
    
    return (
        <div className="row">
            <div className="col s12 m6 z-depth-2">
                <div className="card light-blue lighten-3">
                    <div className="card-content brown-text text-darken-3">
                        <span className="card-title ">Income</span>
                        <p>$ {income}</p>
                    </div>
                </div>
            </div>
            
            <div className="col s12 m6 z-depth-2">
                <div className="card red accent-3">
                    <div className="card-content white-text text-darken-3">
                        <span className="card-title">Expense</span>
                        <p>$ {expense}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
