import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import { fetchCompanies } from './redux/Companies/CompaniesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Companies />} />
      </Routes>
    </div>
  );
}

export default App;
