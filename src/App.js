import { Routes,Route } from 'react-router-dom';
import Login from './Auth/Login.js';
import Register from './Auth/Register.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;