import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'


const Expenses=()=>{
    
    
    return(
        <Card className='expenses'>
            <ExpenseItem
            expenseData={expenses[0]}
            />
            <ExpenseItem
            expenseData={expenses[1]}
            />
        </Card>
    )
}

export default Expenses