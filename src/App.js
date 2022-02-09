import './App.css';
import Main from './component/Main/Main';
import Header from './component/Header/Header';
import ULS from './component/ULS';
import Feature from './component/Feature/Feature';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className='container'></div>
     <Header/>
     <Main/>
     <ULS/>
     <Feature/>
    
    
    </div>
  );
}

export default App;
