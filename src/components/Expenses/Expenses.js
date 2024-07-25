import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import React, { useState } from 'react';

const Expenses=(props)=>{
    
    const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

    const handleFilterChange = (filteredExpenses) => {
    setFilteredExpenses(filteredExpenses);
    };

    return(         
        <Card className='expenses'>
            <ExpensesFilter expenses={props.expenses} onFilterChange={handleFilterChange} />
            {filteredExpenses.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id} />
            ))}
        </Card>
    );
}

export default Expenses