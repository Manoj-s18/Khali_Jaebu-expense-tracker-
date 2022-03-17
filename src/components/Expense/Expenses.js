import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) =>{
    
    const [year , setYear] = useState('');
    const handleFilter = (filter)=>{
        
        setYear(filter);
    }
    const filteredData = props.expenses.filter((obj)=>{
        return obj.date.getFullYear().toString() === year
        })
    return(
        
        <div>      
        <ExpenseFilter onFilter = {handleFilter}/>   
        <Card className = 'expenses'>
         <ExpenseChart expenses={filteredData}/>   
        { year === '' && <ExpenseList items ={props.expenses}/>}
        { year !== '' && <ExpenseList items={filteredData}/>}
        </Card>
        </div>
        
    )
}
export default Expenses;