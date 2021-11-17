import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList, deleteCoin} = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get("/coins/markets/", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","),
                }
            });
            setCoins(response.data);
            setIsLoading(false);
        }
        if (watchList.length > 0) {
            fetchData();
        } else {
            setCoins([]);
        }
    }, [watchList]);

    const renderCoins = () => {
        if(isLoading) {
            return <div className="loading">Loading...</div>
        }

        return (
            <div className="listwrapper">
                <ul className="coinlist list-group mt-2">
                    <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-around align-items-center text-dark">
                        <div className="col-sm-1">
                            <span className="text-decoration-none"></span>
                        </div>
                        <div className="col-sm-4">
                            <span className="text-decoration-none">Coin</span>
                        </div>
                        <div className="col-sm-4">
                            <span className="text-decoration-none">Price</span>
                        </div>
                        <div className="col-sm-2">
                            <span>24h</span>
                        </div>
                    </li>
                </ul>
                <ul className="coinlist list-group mt-2">
                    {coins.map(coin => {
                        return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
                    })}
                </ul>
            </div>


        )

    }

    return (
        <div>
           {renderCoins()} 
        </div>
    );
};

export default CoinList;
