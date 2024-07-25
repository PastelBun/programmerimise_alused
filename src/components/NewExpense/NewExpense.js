import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setEditForm(false); // Close the form after saving
    };

    const addExpenseHandler = () => {
        setEditForm(true);
    };

    const cancelExpenseHandler = () => {
        setEditForm(false);
    };

    return (
        <div className="new-expense">
            {
                !editForm && 
                <button onClick={addExpenseHandler}>Add New Expense</button>
            }
            {
                editForm && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler} />
            )}
        </div>
    );    
};

export default NewExpense;