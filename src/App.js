import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Header from './components/Header';

const dummyData = [
  {
    id:1,
    title:'car service',
    amount:50000,
    date : new Date(2019,4,25)
  },
  {
    id:2,
    title:'Birthday Party',
    amount:10000,
    date : new Date(2021,2,12)
  },
  {
    id:3,
    title:'scaler academy',
    amount:20000,
    date : new Date(2021,10,21)
  },    
  
]
function App() {
  
  const [expenses,setExpenses]=useState(dummyData);
  const handleExpenseChange = (data)=>{
    setExpenses((expense)=>{
      return [...expense,data];
    })
  } 
  return (
    < div className = 'App-header'>
      <div><Header/></div>
            
      
      <NewExpense expenseChange ={handleExpenseChange}/>
      
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
