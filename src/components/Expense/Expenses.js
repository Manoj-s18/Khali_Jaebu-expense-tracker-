import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expenses = (props) =>{
    
    return(
        <Card className = 'expenses'>
        <ExpenseItem title = {props.expenses[0].title} cost = {props.expenses[0].amount} date = {props.expenses[0].date}/>
        <ExpenseItem title = {props.expenses[1].title} cost = {props.expenses[1].amount} date = {props.expenses[1].date}/>
        <ExpenseItem title = {props.expenses[2].title} cost = {props.expenses[2].amount} date = {props.expenses[2].date}/>
        </Card>
    )
}
export default Expenses;