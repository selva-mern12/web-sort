import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import websiteLogo from '../assests/app-logo.png';

const Header = ({ onNavClick, navigate }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInPageNav = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => onNavClick(sectionId), 100);
    } else {
      onNavClick(sectionId);
    }
    setMenuOpen(false);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <div className="w-full h-[108px] bg-[#DAE5FF] flex items-center justify-between px-6 md:px-16 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <img
        src={websiteLogo}
        alt="Website Logo"
        className="h-12 md:h-14 cursor-pointer transition-transform hover:scale-105 active:scale-95 duration-300"
        onClick={() => {
          navigate('/');
          setMenuOpen(false);
        }}
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-[#212062] font-medium text-lg">
        {['about', 'services', 'projects', 'careers'].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:underline hover:scale-105 active:scale-95 focus:scale-95 transition-all duration-200"
            onClick={() =>
              item === 'services' || item === 'careers'
                ? navigate(`/${item}`)
                : handleInPageNav(item)
            }
          >
            {item === 'about'
              ? 'About us'
              : item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <button
        type="button"
        onClick={() => {
          navigate('/contact');
          setMenuOpen(false);
        }}
        className="hidden md:block bg-[#212062] text-white px-6 py-2 rounded-md hover:bg-[#1a1a50] transition-all duration-300 hover:scale-105 active:scale-95 focus:scale-95"
      >
        Contact us
      </button>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl text-[#212062] cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiOutlineMenu />}
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-[#DAE5FF] shadow-lg z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-start p-6 gap-6 text-[#212062] font-semibold text-lg mt-20 animate-fadeRight">
          {['about', 'services', 'projects', 'careers'].map((item) => (
            <li
              key={item}
              className="w-full cursor-pointer hover:underline transition-all hover:scale-105 active:scale-95 focus:scale-95"
              onClick={() =>
                item === 'services' || item === 'careers'
                  ? navigate(`/${item}`)
                  : handleInPageNav(item)
              }
            >
              {item === 'about'
                ? 'About us'
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
          <li
            className="w-full mt-4 bg-[#212062] text-white px-4 py-2 rounded-md hover:bg-[#1a1a50] transition-all hover:scale-105 active:scale-95 focus:scale-95 cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
