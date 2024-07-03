
import './App.css';
import { Navbars } from './Components/Navbars/Navbars';
import Home from './Components/Home/Home';
import { About } from './Components/About/About';
import { Products } from './Components/Products/Products';
import { PartnersApp } from './Components/PartnersApp/PartnersApp';
import { Recuest } from './Components/Recuest/Recuest';
import { FooterApp } from './Components/FooterApp/FooterApp';	
function App() {
  return (
    <div className="App">
     <Navbars/>
	 <Home/>
	 <About/>
	 <Products/>
	 <PartnersApp/>
	 <Recuest/>
	 <FooterApp/>
    </div>
  );
}

export default App;
