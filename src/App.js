import './App.css';
import Summary from './components/Summary';
import Results from './components/Results';

function App() {
  return (
    <div className="grid grid-cols-2 gap-14 bg-slate-400 h-screen">
       <Results />
      <Summary />
    </div>
  );
}

export default App;
