import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import HowItWorks from './pages/HowItWorks';
import GettingStarted from './guides/getting-started';
import MarketCycles from './guides/market-cycles';
import RiskManagement from './guides/risk-management';
import PortfolioBuilding from './guides/portfolio-building';
import TechnicalAnalysis from './guides/technical-analysis';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        
        {/* Guide Routes */}
        <Route path="/guides/getting-started" element={<GettingStarted />} />
        <Route path="/guides/market-cycles" element={<MarketCycles />} />
        <Route path="/guides/risk-management" element={<RiskManagement />} />
        <Route path="/guides/portfolio-building" element={<PortfolioBuilding />} />
        <Route path="/guides/technical-analysis" element={<TechnicalAnalysis />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}