import Home from './Home';
import Navbar from './Navbar';
import DarkModeButton from './DarkModeButton'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <main>
        <Home />
      </main>
      <DarkModeButton />
    </div>
  );
}

export default App;