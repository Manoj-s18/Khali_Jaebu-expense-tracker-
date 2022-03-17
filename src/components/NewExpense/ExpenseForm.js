import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props)=>{
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');
    
    const handleTitle =(event)=>{ setEnteredTitle(event.target.value)};
    const handleAmount =(event)=>{ setEnteredAmount(event.target.value)};
    const handleDate =(event)=>{ setEnteredDate(event.target.value)};

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const enteredData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        if(enteredTitle !=='' && enteredAmount !=='' && enteredDate!=='')
            props.onSaveForm(enteredData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        props.onCancel();
    }
    const handleCancelForm = ()=>{
        props.onCancel();
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text"
                    value={enteredTitle}
                    onChange={handleTitle}
                    />
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input
                    type="Number"
                    min='1' step='1'
                    value={enteredAmount}
                    onChange={handleAmount}
                    />
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input 
                    type="Date" 
                    min='2019-1-1' max='2022-12-31' 
                    value={enteredDate} 
                    onChange={handleDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions '>
                <button type='button' onClick={handleCancelForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;