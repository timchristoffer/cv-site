import React from 'react';
import NavBar from "@/components/NavBar/NavBar";
import Portfolio from "@/components/Portfolio/Portfolio"; // Importera Portfolio-komponenten
import Copyright from '@/components/Copyright/Copyright';

const PortfolioPage = () => {
  return (
    <div>
      <NavBar />
      <div className="portfolio-container">
        <Portfolio /> {/* Använd Portfolio-komponenten */}
      </div>
      <Copyright />
    </div>
  );
};

export default PortfolioPage;