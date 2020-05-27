import React,{useContext} from 'react'
import { TransactionContext } from '../context/GlobalState';

export const Balance = () => {

    const transactionContext = useContext(TransactionContext);
    const transactions = transactionContext.state.transactions;

    const total = transactions.reduce((total, transaction) => (total += transaction.amount),0).toFixed(2);

    return (
        <>
            <h2>Your Balance</h2>
            <h1>${total}</h1>
        </>
    )
}
