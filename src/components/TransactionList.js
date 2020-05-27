import React,{useContext} from 'react'
import { TransactionContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {

    const transactionContext = useContext(TransactionContext);

    const transactions = transactionContext.state.transactions;

    

    return (
        <>
            <h3>History</h3>
            {transactions.length > 0 && 
            <ul className="list">
                {
                    transactions.map((transaction) => {
                        return <Transaction key={transaction.id} 
                                transaction={transaction} 
                            />
                    })
                }
            </ul>
            }
        </>
    )
}
