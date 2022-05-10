
import './App.css';
import ItemIn from './components/Header/back';
import Header from "./components/Header/header"
import Navbar from './components/Header/navbar';
import Counter from './components/Hero/counter';
import PriceCard from './components/Hero/price';
import Slider from './components/Hero/slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ItemIn />   
      <div className="container-sm">
        <div className='threeBox'>
          <Slider />
          <Counter />
          <PriceCard />
        </div>
      </div>
    </div>
  );
}

export default App;
