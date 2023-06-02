
import './App.css';
import { Navbar } from './components';
import { Footer, Header, Features, Prices } from './containers';

 
function App() {
  return (
    <div className="App"> 
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <Prices />
    <Footer /> 
  </div>
  );
}

export default App;
