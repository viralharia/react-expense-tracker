import React,{ createContext, useReducer  } from "react";
import TransactionReducer from "./TransactionReducer";

// initial state
const initialState = {
    transactions: [
        /* {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150}, */
    ]
}

// transaction context
export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <TransactionContext.Provider value={{
            state,
            deleteTransaction,
            addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
}

