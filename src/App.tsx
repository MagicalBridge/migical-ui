import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button"
// import logo from './logo.svg';
// import './App.css';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary}>Primary hello</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>Small hello</Button>
        <Button size={ButtonSize.Large}>Large hello</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
