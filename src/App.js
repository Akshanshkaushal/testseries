 import Navbar from './components/Navbar';
 import Pyq_1 from './components/Previous_year/pyq_1';
 import Pyq_2 from './components/Previous_year/Pyq2';
 import Yodha_1 from './components/Previous_year/Yodha_1';
 import Yodha_2 from './components/Previous_year/Yodha_2';
 import Kawach from './components/Previous_year/Kawach';
 import Bramhastar from './components/Previous_year/Bramhastar';
 import Parambh_1 from './components/Previous_year/Parambh_1';
 import Parambh_2 from './components/Previous_year/Parambh_2';
 import Samparan_1 from './components/Previous_year/Samarpan_1';
 import Samparan_2 from './components/Previous_year/Samarpan_2';
 import Sarthi_1 from './components/Previous_year/Sarthi_1';
 import Sarthi_2 from './components/Previous_year/Sarthi_2';
 import Login from './components/login';
import './App.css';
import SignUp from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoon from './components/comingSoon';
import Inspiring_stories from './components/Inspiring_stories';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="soon" element={
        <ComingSoon/>
        } />
 
        <Route path="Login" element={ 
          <Login/>
        }/>

        <Route path="signup" element={
          <SignUp/>
        }/>

{/* courses */}
         <Route path="pyq1" element={
          <Pyq_1/>
        }/>

         <Route path=" pyq2" element={
          <Pyq_2/>
        }/>

<Route path=" yodha1" element={
          <Yodha_1/>
        }/>

<Route path="yodha2" element={
          <Yodha_2/>
        }/>

<Route path="samparan1" element={
          <Samparan_1/>
        }/>

<Route path="samparan2" element={
          <Samparan_2/>
        }/>

<Route path="sarthi1" element={
          <Sarthi_1/>
        }/>

<Route path="sarthi2 " element={
          <Sarthi_2/>
        }/>

<Route path="parambh1" element={
          <Parambh_1/>
        }/>

<Route path="parambh2 " element={
          <Parambh_2/>
        }/>

<Route path="kawach" element={
          <Kawach/>
        }/>

<Route path="bramhastar " element={
          <Bramhastar/>
        }/>

<Route path="inspiring_stories" element={
          <Inspiring_stories/>
        }/>

<Route path="community" element={
          <ComingSoon/>
        }/>

<Route path="important_tips" element={
          <ComingSoon/>
        }/>


    </Routes>
      
   
       
    
       
       {/* <Pyq_1/>
       <Pyq_2/>
       <Kawach/>
       <Samparan_1/> 
       <Samparan_2/>
       <Sarthi_1/>
       <Sarthi_2/>
       <Yodha_1/>
       <Yodha_2/>
       <Parambh_1/>
       <Parambh_2/>
       <Bramhastar/> */}
       </BrowserRouter>

    </div>
  );
}

export default App;
