import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import expenseData from App
import App from '../../App'


const Expenses=()=>{
    
    
    return(
        <Card className='expenses'>
            <ExpenseItem
            expenseData={props.App.expenses[0]}
            />
            <ExpenseItem
            expenseData={props.App.expenses[1]}
            />
        </Card>
    )
}

export default Expenses