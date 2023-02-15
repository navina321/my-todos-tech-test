
import './App.scss';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <div className='todo__header'>
        <h1 className='todo__header--title'>My Todos</h1>
        <Button buttonText={"Reset"}/>
      </div>

      <div className='todo__form'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
