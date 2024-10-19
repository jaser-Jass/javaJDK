import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Janna';
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      <Article number="3" name="Info"/>
      <Article number="5" name="Blog"/>
      <Message content="Напоминание: Не забудь выключить утюг!"/>
    </div>
  );
}

function Message({content}) {
  let ironIsOn = true;
  return (
    <d style={{ color: ironIsOn ? 'red' : 'green'}}>{content}</d>
  )
}

function Article({name, number}) {
  let themeSiteWhite = true;
  return ( 
    <div>
      <h2 style={{ color: themeSiteWhite ? 'green' : 'red'}}>Статья про {name} номер {number}</h2>
      <a href='#'>Читать статью </a>
    </div>
   );
}



export default App;
