import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <div>
        <h1>Hello, world!</h1>
      </div>
      <div>
        <h1>DairyKitchen</h1>
      </div>
    </header>
  );
}

function App() {
  return (
<div>
      <Header />
      <main>
        <div class="container">
          <div class="tabBox">
            <div class="tabHeader">
              <div>
                <h4>ID</h4>
              </div>
              <div>
                <h4>Номер телефона</h4>
              </div>
              <div>
                <h4>Заказ</h4>
              </div>
              <div>
                <h4>Дата доставки</h4>
              </div>
              <div>
                <h4>Дата выдачи</h4>
              </div>
            </div>
            <div class="tabString">
              <div>000123</div>
              <div>8-123-456-78-90</div>
              <div class="order">
                <div>Молоко</div>
                <div>1</div>
                <div>л</div>
              </div>
              <div>01.01.2024</div>
              <div>02.01.2024</div>
            </div>
          </div>
        </div>
      </main>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>*/
  );
}

export default App;
