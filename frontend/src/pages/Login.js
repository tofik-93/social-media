import { useState, useContext } from 'react';
      import { useNavigate } from 'react-router-dom';
      import { AuthContext } from '../context/AuthContext';

      const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const { login } = useContext(AuthContext);
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await login(email, password);
            navigate('/');
          } catch (err) {
            console.error(err);
          }
        };

        return (
          <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 mb-2 border"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 mb-2 border"
              />
              <button type="submit" className="bg-blue-600 text-white p-2 w-full">Login</button>
            </form>
          </div>
        );
      };

      export default Login;