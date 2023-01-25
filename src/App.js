import logo from "./logo.svg"
import "./App.css"
import Calculator from "./Calculator"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <span>Calculator - Created in React</span>
        <Calculator />
      </header>
    </div>
  )
}

export default App
