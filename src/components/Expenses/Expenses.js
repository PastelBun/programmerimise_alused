import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses=(props)=>{
    /*const expenses=props;*/
    const {expenses}=props;
    /*const YearChangeHandler=(event)=>{
        setEnteredYear(event.target.value)
    } */
    props.expenses.map((expense)=>{
        console.log(expense)
    })
    return(
        <Card className='expenses'>
            <ExpensesFilter/>
            {
                props.expenses.map((expense)=>{
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    );
}

export default Expenses