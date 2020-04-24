import React from 'react';
import './App.css';
import {Balance} from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Transactionlist } from './components/Transactionlist';
import { AddTransactionForm } from './components/AddTransactionForm';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h2>Expense Tracker</h2>
        <Balance />
        <IncomeExpense />
        <Transactionlist />
        <AddTransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
