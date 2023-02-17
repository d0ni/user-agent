import './App.css';
import {UAParser} from 'ua-parser-js';
import ReactJson from 'react-json-view'

function App() {
  const data = UAParser(window.navigator.userAgent);
  return (
    <div className="App">
      <ReactJson src={data} displayObjectSize={false} displayDataTypes={false} />
    </div>
  );
}

export default App;
