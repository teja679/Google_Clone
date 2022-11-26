
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
// import SearchPage from './Components/SearchPage';
// import War from './War';

function App() {
  return (
   <Router>
    <Routes>
      hai
      <Route path='/' element={<Home />} />
      {/* <Route path='/' element={<War />} />
      <Route path='/search' element={<SearchPage/>} /> */}
    </Routes>
   </Router>
  );
}

export default App;
