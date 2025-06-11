import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    // Mock user data - replace with actual authentication logic
    login({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to Social Media App
          </h1>
          
          {user ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Welcome back, <span className="font-semibold">{user.name}</span>!
              </p>
              <p className="text-gray-600">Email: {user.email}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Please log in to continue
              </p>
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Login (Demo)
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-700">No recent activity yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}