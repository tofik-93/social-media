import { createContext, useState, useEffect } from 'react';
     import api from '../services/api';

     const AuthContext = createContext();

     const AuthProvider = ({ children }) => {
       const [user, setUser] = useState(null);

       useEffect(() => {
         const token = localStorage.getItem('token');
         if (token) {
           // Optionally fetch user data using token
           setUser({ token });
         }
       }, []);

       const login = async (email, password) => {
         const res = await api.post('/auth/login', { email, password });
         localStorage.setItem('token', res.data.token);
         setUser({ token: res.data.token });
       };

       const signup = async (username, email, password) => {
         await api.post('/auth/signup', { username, email, password });
       };

       const logout = () => {
         localStorage.removeItem('token');
         setUser(null);
       };

       return (
         <AuthContext.Provider value={{ user, login, signup, logout }}>
           {children}
         </AuthContext.Provider>
       );
     };

     export { AuthContext, AuthProvider };