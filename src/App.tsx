import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button"
// import logo from './logo.svg';
// import './App.css';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
        {/* <form action="/upload" method="post" encType="multipart/form-data">
          <input type="file" accept="video/*" capture="user"/>
          <input type="submit" value="上传"/>
        </form> */}
      <header className="App-header">
        <Button onClick={(e)=>{e.preventDefault(); alert(124)}}>hello</Button>
        <Button btnType={ButtonType.Primary}>Primary hello</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>Small hello</Button>
        <Button size={ButtonSize.Large}>Large hello</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
      </header>
    </div>
  );
}

export default App;
