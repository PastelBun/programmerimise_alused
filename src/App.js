import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import Card from './components/Card'

function App() {
  return (
    <Card className="App">
      <Expenses
      expenses={Expenses}
       />
    </Card>
  );
}

export default App;
