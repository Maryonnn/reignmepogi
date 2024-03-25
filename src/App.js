import { Routes,Route } from 'react-router-dom';
import Login from './Auth/Login.js';
import PDashboard from './Personnel/PDashboard.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pdashboard" element={<PDashboard />} />
      </Routes>
    </>
  );
}

export default App;