import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { func } from 'prop-types';

const initialState = {
    transactions: []        
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}