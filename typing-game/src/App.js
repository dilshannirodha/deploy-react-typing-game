 
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  TypingTest  from './pages/TypingTest'
import  TypingGame  from './pages/TypingGame'
import  Multiplayer from './pages/Multiplayer'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { GetValuesProvider } from './context/GetValuesContext';



function App() {
  return (
    <GetValuesProvider>
    <div class="bg-gray-900">
     
      <Router>
      
         <NavBar /> 
        <Routes>
          <Route path='/TypingGame' exact element={<TypingGame />} />
          <Route path='/TypingTest' element={<TypingTest />} />
          <Route path='/TypingGame' element={<TypingGame />} />
        </Routes>
        <Footer />
       
      </Router>
      
      
      
    </div>

    </GetValuesProvider>
  );
}

export default App;
