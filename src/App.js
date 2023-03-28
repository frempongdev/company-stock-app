import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import Profile from './components/Profile';
import { fetchCompanies } from './redux/Companies/CompaniesSlice';

function App() {
  const dispatch = useDispatch();
  const { status: companiesStatus } = useSelector((state) => state.companies);

  useEffect(() => {
    if (companiesStatus === 'idle') {
      dispatch(fetchCompanies());
    }
  }, [companiesStatus, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
