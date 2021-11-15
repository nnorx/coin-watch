import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProviver = (props) => {
    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList")?.split(",") || [
            "bitcoin",
            "ethereum",
            "cardano",
            "polkadot",
            "terra-luna"
        ]
    );

    useEffect(() => {
        localStorage.setItem("watchList", watchList);
    },[watchList]);

    const deleteCoin = (coin) => {
        setWatchList(watchList.filter(el => {
            return el !== coin
        }))
    }

    const addCoin = (coin) => {
        if (watchList.indexOf(coin) === -1) {
            setWatchList([...watchList, coin])
        }
    }

    return (
        <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
            {props.children}
        </WatchListContext.Provider>
    );
};