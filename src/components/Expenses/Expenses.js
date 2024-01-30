import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import React from 'react'


const Expenses=(props)=>{
    const{ expenses } =props;
    
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