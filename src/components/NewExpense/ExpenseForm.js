import { Fragment, useRef, useState } from 'react'
import './ExpenseForm.css'
import Error from '../UI/Error'

const ExpenseForm =(props)=>{

const [error, setError]= useState(null)
console.log(error)

const titleInputRef = useRef()
const amountInputRef = useRef()
const dateInputRef = useRef()

const errorHandler= ()=> {
    setError(null)
}

const submitHandler=(event)=>{
    const enteredTitle= titleInputRef.current.value
    const enteredAmount= amountInputRef.current.value
    const enteredDate= dateInputRef.current.value

    event.preventDefault()

    if(enteredTitle.trim().length=== 0 || enteredAmount.trim().length == 0 || enteredDate.trim().length== 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid title, amount and/or date (currently one or more values are empty)'
        })
        return
    }
    const expenseData= {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    } 
    props.onSaveExpenseData(expenseData)
    props.onCancel()
    titleInputRef.current.value= ''
    amountInputRef.current.value= ''
    dateInputRef.current.value= ''
} 

    return(
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <div>
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className='new-expense__control'>
                            <label>Title</label>                   
                            <br/>
                            <input type="text"
                            id='title'
                            className='title'
                            ref={titleInputRef}/>
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <br/>
                            <input type="number" min="0.01" step="0.01"
                            id='amount'
                            className='amount'
                            ref={amountInputRef}/>
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <br/>
                            <input type="date" min="2024-01-01" max="2026-12-31"
                            id='date'
                            className='date'
                            ref={dateInputRef}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit" className='submit'>Add Expense</button>
                        <button type='button' onClick={props.onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
} 
export default ExpenseForm