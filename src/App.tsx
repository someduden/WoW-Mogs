import { Route, Routes } from 'react-router';
import './App.css';
import FullLayout from './Layouts/FullLayout';

function App() {
  return (
    <FullLayout>
      <Routes>
        <Route path="/" element={<div>hello world!</div>} />
      </Routes>
    </FullLayout>
  );
}

export default App;
