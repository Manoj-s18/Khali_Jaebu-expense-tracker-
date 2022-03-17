import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [addExpense,setAddExpense] = useState(false);
    const handleOnSaveForm = (data)=>{
        data = {...data,
        id : Math.random().toString()
        }
        //console.log(data);
        props.expenseChange(data);
    }
    const handleAddExpense = ()=>{
        setAddExpense(true);
    }
    const handleCancelForm = ()=>{
        setAddExpense(false);
    }
    return(
        <div className = 'new-expense'>
            { addExpense === true && <ExpenseForm onSaveForm={handleOnSaveForm} onCancel={handleCancelForm}/>}
            { addExpense=== false && <button className='new-expense' onClick={handleAddExpense}>Add New Expense</button>}
        </div>
    )
}
export default NewExpense;