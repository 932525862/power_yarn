
import './App.css';
import { Navbars } from './Components/Navbars/Navbars';
import Home from './Components/Home/Home';
import { About } from './Components/About/About';
import { Products } from './Components/Products/Products';
import { Partners } from './Components/Partners/Partners';
import { Recuest } from './Components/Recuest/Recuest';
import { FooterApp } from './Components/FooterApp/FooterApp';	
function App() {
  return (
    <div className="App">
     <Navbars/>
	 <Home/>
	 <About/>
	 <Products/>
	 <Partners/>
	 <Recuest/>
	 <FooterApp/>
    </div>
  );
}

export default App;
