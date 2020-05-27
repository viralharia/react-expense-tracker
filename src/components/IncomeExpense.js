import React,{useContext} from 'react'
import { TransactionContext } from '../context/GlobalState';

export const IncomeExpense = () => {

    const transactionContext = useContext(TransactionContext);
    const transactions = transactionContext.state.transactions;

    const income = transactions
                    .filter((transaction) => transaction.amount > 0)
                    .reduce((total, transaction) => total += transaction.amount, 0)
                    .toFixed(2);

    const expense = transactions
                        .filter((transaction) => transaction.amount < 0)
                        .reduce((total, transaction) => total += transaction.amount, 0)
                        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{Math.abs(expense)}</p>
            </div>
        </div>
    )
}
