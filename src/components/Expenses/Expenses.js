import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses=(props)=>{
    /*const expenses=props;*/
    const {expenses}=props;
    const YearChangeHandler=(event)=>{
        setEnteredYear(event.target.value)
    } 
    
    return(
        <Card className='expenses'>
            <ExpensesFilter/>
            <ExpenseItem
            expenseData={expenses[0]}
            value={expenses.date.YEAR()} 
            />
            <ExpenseItem
            expenseData={ expenses[1]}
            value={expenses.date.YEAR()} 
            />
        </Card>
    );
}

export default Expenses