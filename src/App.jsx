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
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/coin-watch" element={<CoinSummaryPage />} />
                    <Route path="/coin-watch/coins/:id" element={<CoinDetailPage />} />
                </Routes>
            </BrowserRouter>  
        </WatchListContextProviver>
    </div>
    
    );
};

export default App;