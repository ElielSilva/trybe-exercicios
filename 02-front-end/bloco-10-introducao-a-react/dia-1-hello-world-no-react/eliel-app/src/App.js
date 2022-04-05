import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const lista = ['ler', 'estudar', 'treino' ,'estudo biblico']

function App() {
  return lista.map(item => Task(item)) 
}

export default App;
