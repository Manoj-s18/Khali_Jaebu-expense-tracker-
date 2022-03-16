import './App.css';
import Expenses from './components/Expense/Expenses';
function App() {
  
  const expenses = [
    {
      id:1,
      title:'car service',
      amount:'50,000',
      date : new Date(2019,4,25)
    },
    {
      id:2,
      title:'Birthday Party',
      amount:'10,000',
      date : new Date(2021,2,12)
    },
    {
      id:3,
      title:'scaler academy',
      amount:'20,000',
      date : new Date(2021,10,21)
    },    
    
  ]
  return (
    < div className = 'App-header'>
     <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
