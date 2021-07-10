import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery title="Today's Lottery" numBalls={5} maxNum={7} />
      <Lottery title="Mini Lotto" numBalls={3} maxNum={4} />
    </div>
  );
}

export default App;
