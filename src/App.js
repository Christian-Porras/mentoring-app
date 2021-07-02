import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.scss';
import ShoppingApp from './components/ShoppingApp';

function App() {
  return (
    <Container fluid className="App">
      <header className="App-header">
        <ShoppingApp />
      </header>
    </Container>
  );
}

export default App;
