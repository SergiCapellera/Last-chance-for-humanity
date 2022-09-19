import './App.css';
import { FormComponent } from './components/FormComponent';
import fondo from './img/fondo.png';


function App() {
  return (
    <div className='full' style={{ backgroundImage: "url(" + fondo + ")" }}>
      <div className="container">
        <div className="content">
          <FormComponent />
        </div>
      </div>
    </div>

  );
}

export default App;
