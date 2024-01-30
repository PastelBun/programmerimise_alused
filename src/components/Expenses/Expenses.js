import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import React from 'react'
import ExpensesFilter from './ExpensesFilter'

const Expenses=(props)=>{
    /*const expenses=props;*/
    props.React(expenses)
    props.ExpensesFilter(ExpensesFilter)
    return(
        <Card className='expenses'>
            <ExpenseItem
            expenseData={expenses[0]}
            />
            <ExpenseItem
            expenseData={ expenses[1]}
            />
        </Card>
    )
}

export default Expenses