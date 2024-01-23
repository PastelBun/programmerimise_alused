import './ExpenseItem.css'

function ExpenseItem(props){
    console.log(props)

    return(
        <div className='expense-item'>
            <div>(props.expenseData.date.toStrong())</div>
            <div className='expense-item__description'>
                <h2>(props.expenseData.title)</h2>
                <div className='expense-item__price'>(props.expenseData.price)</div>
            </div>
        </div>
    )
}
export default ExpenseItem