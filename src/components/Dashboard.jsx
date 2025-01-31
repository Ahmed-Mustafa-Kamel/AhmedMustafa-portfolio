import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    projects: 15,
    experience: 2
  });
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Compare with hashed password from env
      const isMatch = await bcrypt.compare(
        password, 
        import.meta.env.VITE_DASHBOARD_PASSWORD_HASH
      );
      
      if (isMatch) {
        setIsAdmin(true);
        localStorage.setItem('portfolioAdmin', 'true');
      } else {
        alert('Invalid password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  const updateStats = (key, value) => {
    setStats(prev => ({
      ...prev,
      [key]: value
    }));
    // Save to localStorage
    localStorage.setItem('portfolioStats', JSON.stringify({
      ...stats,
      [key]: value
    }));
  };

  useEffect(() => {
    // Check if admin is logged in
    const isAdminLoggedIn = localStorage.getItem('portfolioAdmin') === 'true';
    setIsAdmin(isAdminLoggedIn);

    // Load saved stats
    const savedStats = localStorage.getItem('portfolioStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
        <div className="bg-zinc-800 p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Dashboard Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="bg-zinc-700 p-3 rounded w-full pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
              >
                {showPassword ? (
                  <span className="material-symbols-rounded text-xl">visibility_off</span>
                ) : (
                  <span className="material-symbols-rounded text-xl">visibility</span>
                )}
              </button>
            </div>
            <div className="flex gap-2">
              <button 
                type="submit"
                className="bg-sky-600 px-4 py-2 rounded hover:bg-sky-700 flex-1"
              >
                Login
              </button>
              <button 
                type="button"
                onClick={() => navigate('/')}
                className="bg-zinc-700 px-4 py-2 rounded hover:bg-zinc-600"
              >
                Back to Site
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="max-w-2xl mx-auto bg-zinc-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-zinc-700 px-4 py-2 rounded hover:bg-zinc-600"
          >
            View Site
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-zinc-700/50 p-4 rounded-lg">
            <label className="block text-sm mb-2">Projects</label>
            <div className="flex gap-3">
              <button 
                onClick={() => updateStats('projects', stats.projects - 1)}
                className="bg-zinc-600 px-4 py-2 rounded hover:bg-zinc-500"
              >
                -
              </button>
              <span className="px-4 py-2 bg-zinc-800 rounded min-w-[60px] text-center">
                {stats.projects}
              </span>
              <button 
                onClick={() => updateStats('projects', stats.projects + 1)}
                className="bg-zinc-600 px-4 py-2 rounded hover:bg-zinc-500"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-zinc-700/50 p-4 rounded-lg">
            <label className="block text-sm mb-2">Years of Experience</label>
            <div className="flex gap-3">
              <button 
                onClick={() => updateStats('experience', stats.experience - 0.5)}
                className="bg-zinc-600 px-4 py-2 rounded hover:bg-zinc-500"
              >
                -
              </button>
              <span className="px-4 py-2 bg-zinc-800 rounded min-w-[60px] text-center">
                {stats.experience}
              </span>
              <button 
                onClick={() => updateStats('experience', stats.experience + 0.5)}
                className="bg-zinc-600 px-4 py-2 rounded hover:bg-zinc-500"
              >
                +
              </button>
            </div>
          </div>

          <button 
            onClick={() => {
              localStorage.removeItem('portfolioAdmin');
              setIsAdmin(false);
            }}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full mt-8"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 