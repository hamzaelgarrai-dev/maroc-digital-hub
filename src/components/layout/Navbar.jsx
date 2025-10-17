import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);

  
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    navigate("/");
  };

  return (
    <div className="relative max-w-[1050px] mx-auto top-0 inset-0 z-50">
      <nav className="pt-8 h-16 flex justify-between items-center">
       
        <div
          className="logo text-[22px] font-bold cursor-pointer "
          onClick={() => navigate("/")}
        >
          Maroc DH
        </div>

        
        <ul className="flex justify-between w-[480px] text-[15px]  font-medium">
          <Link to="/"><li className="cursor-pointer">Home</li></Link>
          <Link to="/Events"><li className="cursor-pointer">Events</li></Link>
          <Link to="/Networking"><li className="cursor-pointer">Networking</li></Link>
          <Link to="/My_Events"><li className="cursor-pointer">My Events</li></Link>

          
          {auth?.user?.role === "admin" && (
            <Link to="/Dashboard">
              <li className="cursor-pointer text-[#0D9488] font-semibold">Dashboard</li>
            </Link>
          )}
        </ul>

       
        <div className="w-42 flex justify-between items-center gap-3">
          {auth ? (
            <>
              <span className="text-gray-600 text-sm">
                Hi, {auth.user.name?.split(" ")[0]} 
              </span>
              <button
                onClick={handleLogout}
                className="w-20 h-8 bg-[#E5E7EB] rounded-md cursor-pointer text-sm font-medium"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/SignIn">
                <button className="w-20 h-8 bg-[#E5E7EB] rounded-md cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/SignUp">
                <button className="w-20 h-8 bg-[#0D9488] rounded-md text-white text-[14px] cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
