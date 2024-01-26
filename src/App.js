import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'


const App=()=> {
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses
      expenses={Expenses}
       />
    </div>
  );
}

export default App;
