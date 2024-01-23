import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="App">
      <Expenses
      expenses={expenses}
       />
    </div>
  );
}

export default App;
