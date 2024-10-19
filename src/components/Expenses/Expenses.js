import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import React, { useState } from 'react';

const Expenses=(props)=>{
    
    const [filteredYear, setFilteredYear] = useState('2024')

    const filterChangeHandler = (year) => {
        console.log('Year data in Expenses.js' + year)
        setFilteredYear(year)
    }

    const filteredExpenses=props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear() == filteredYear
    })

    return(    
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter=
            {filterChangeHandler}/>
            <ExpensesList expenses={filteredExpenses}
            isLoading={props.isLoading}/>
        </Card>
    )
}

export default Expenses