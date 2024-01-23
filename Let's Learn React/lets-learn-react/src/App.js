import Home from './Home';
import Navbar from './Navbar';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <main>
        <Blog />
      </main>
      <Home />
    </div>
  );
}

export default App;
