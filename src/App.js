import './App.css';
import Summary from './components/Summary';
import Results from './components/Results';

function App() {
  return (
    <div className="grid grid-cols-2 bg-amber-100 h-screen p-8 pb-96 pt-40 rounded-md ">
       <Results />
      <Summary />
    </div>
  );
}

export default App;
