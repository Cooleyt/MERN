import './App.css';
import Card from './components/personCard';

function App() {
  return (
    <div className = "App">
        <p>
          <Card lastName="Doe" firstName = "Jane" age="45" hairColor = "Black" />
        </p>
        <p>
          <Card lastName="Smith" firstName = "John" age="88" hairColor="Brown" />
        </p>
        <p>
          <Card lastName="Fillmore" firstName = "Millard" age="50" hairColor="Brown" />
        </p>
        <p>
          <Card lastName="Smith" firstName = "Maria" age="62" hairColor="Brown" />
        </p>
    </div>
  );
}

export default App;
