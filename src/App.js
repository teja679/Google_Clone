
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SearchInput from './Components/SearchInput';
import SearchPage from './Components/SearchPage';
// import SearchPage from './Components/SearchPage';
// import War from './War';

function App() {
  return (
   <Router>
    <Routes>
      hai
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchPage />} /> 
    </Routes>
   </Router>
  );
}

export default App;
