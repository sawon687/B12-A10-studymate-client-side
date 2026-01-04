import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const DarkToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ✅ Dark/Light theme toggle setup
  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
       html.classList.remove('light')
      html.classList.add("dark"); 
      html.setAttribute('data-theme','dark') 
     
 
    } else {
      html.classList.remove("dark");
        html.classList.add('light')
          html.setAttribute('data-theme','light') 
     
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
    return (
        <>
            

 {/* Navbar End */}
      
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-ghost btn-circle"
          >
            {theme === "dark" ? (
              <Moon className="text-indigo-600" size={22} />
             
            ) : (
               <Sun className="text-yellow-400" size={22} />
            )}
          </button>


         

        </>
    );
};

export default DarkToggle;