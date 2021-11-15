import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import HistoryChart from '../components/HistoryChart';
import CoinData from '../components/CoinData';
import coinGecko from '../apis/coinGecko';
import Footer from '../components/Footer';

const CoinDetailPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: "7",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: "365",
                    },
                }),
                coinGecko.get("/coins/markets/", {
                    params: {
                        vs_currency: "usd",
                        id: id,
                    }
                }),
            ]);
            
            setCoinData({
                day: formatData(day.data.prices),
                week: formatData(week.data.prices),
                year: formatData(year.data.prices),
                detail: detail.data.find((element) => { return element.id === id })
            });
            setIsLoading(false);
        };

        fetchData();
    }, []);


    const renderData = () => {
        if (isLoading) {
            return <div className="loading">Loading...</div>
        }
        return (
            <div>
                <div className="coinlist">
                    <HistoryChart data={coinData}/>
                    <CoinData data={coinData.detail}/>
                </div>
                <Footer />
            </div>

        );
    };
    return renderData();

};

export default CoinDetailPage;
