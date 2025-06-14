import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20 pb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;