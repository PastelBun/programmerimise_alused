/*import './ExpensesFilter.css';

const ExpensesFilter = () => {
    
    const YearSelectHandler=(event)=>{ 
        console.log(event.target.value)
        const Years=App.expense.Year(Date).filter(Selected)
        Selected=return App.expense===event.target.value
    }
    props.App.expense
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={YearSelectHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;*/
import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const YearSelectHandler = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    // Filter expenses based on the selected year
    const filteredExpenses = props.expenses.filter(expense => {
      return new Date(expense.date).getFullYear().toString() === year;
    });

    // Pass the filtered expenses back to the parent component
    props.onFilterChange(filteredExpenses);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={YearSelectHandler}>
          <option value=''>Select year</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
