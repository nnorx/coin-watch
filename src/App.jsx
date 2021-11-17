import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';
import './App.css';
import { WatchListContextProviver } from './context/watchListContext';

export const App = () => {
    return (
    <div className="container">
        <WatchListContextProviver>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />
                <Routes>
                    <Route exact path="/" element={<CoinSummaryPage />} />
                    <Route path="/coins/:id" element={<CoinDetailPage />} />
                </Routes>
            </BrowserRouter>  
        </WatchListContextProviver>
    </div>
    
    );
};

export default App;