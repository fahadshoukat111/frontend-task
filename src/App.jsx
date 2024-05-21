import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import UsersPrefrances from './components/Users-Prefrances/UsersPrefrances';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preferences" element={<UsersPrefrances />}>
      </Route>
    </Routes>
  );
};

export default App;
