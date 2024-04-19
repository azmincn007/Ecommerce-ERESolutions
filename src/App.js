import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Landing from './Components/Landing/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import Alltrending from './Components/Landing/Alltrending';

const queryClient = new QueryClient();

function App() {
  


  return (
    <QueryClientProvider client={queryClient}>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/> 
    <Route path='/alltrending' element={<Alltrending/>}/> 
   </Routes>
   </BrowserRouter>
   </QueryClientProvider>

  );
}

export default App;
