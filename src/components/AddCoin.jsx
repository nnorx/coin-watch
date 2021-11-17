import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin, watchList } = useContext(WatchListContext);
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "polkadot",
        "dogecoin",
        "terra-luna",
        "ripple",
        "avalanche-2",
        "chainlink",
        "bitcoin-cash",
        "litecoin",
        "uniswap",
        "algorand",
        "matic-network",
        "tezos",
        "stellar",
        "cardano",
        "cosmos",
        "vechain",
        "the-graph",
        "binancecoin",
        "blockstack"

    ];
    const unusedCoins = availableCoins.filter(coin => !watchList.includes(coin));

    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };

    return (
        <div className="dropdown">
            <button
                onClick={() => setIsActive(!isActive)}
                className="btn sbtn btn-primary dropdown-toggle"
                type="button"
            >
                Add Coin
            </button>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {unusedCoins.map((el) => {
                    return (
                        <a
                            onClick={() => handleClick(el)}
                            href="#"
                            className="dropdown-item"
                        >
                            {el}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default AddCoin;