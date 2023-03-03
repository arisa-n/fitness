import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import { ExerciseDetails, Home } from './pages';

function App() {
  return (
    <Box width='400px' sx={{width:{x1: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
