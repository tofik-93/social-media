import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import  {AuthProvider}  from './context/AuthContext.jsx';
     import Navbar from './components/Navbar';
     import Home from './pages/Home';
     import Login from './pages/Login';
     import Signup from './pages/Signup';
     import './styles/index.css';

     function App() {
       return (
         <AuthProvider>
           <Router>
             <div className="min-h-screen bg-gray-100">
               <Navbar />
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/signup" element={<Signup />} />
               </Routes>
             </div>
           </Router>
         </AuthProvider>
       );
     }

     export default App;