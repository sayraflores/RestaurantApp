import './App.css';
import {Routes, Route} from 'react-router';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

import Restaurant from './pages/Restaurant';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
  <Route path='/Friends' exact="true" element= {<Friends/>}/>
  <Route path='/' element= {<Home/>}/>
  <Route path='/Restaurant' exact="true" element= {<Restaurant/>}/>

</Routes>
<Footer/>
    </div>
  );
}

export default App;
