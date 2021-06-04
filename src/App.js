import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoppingList name='Chris' />
      </header>
    </div>
  );
}

export default App;
