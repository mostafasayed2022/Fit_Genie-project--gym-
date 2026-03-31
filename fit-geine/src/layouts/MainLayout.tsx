import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  loggedIn: boolean;
  setToken: (token: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ loggedIn, setToken, setLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Navbar loggedIn={loggedIn} setToken={setToken} setLoggedIn={setLoggedIn} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
