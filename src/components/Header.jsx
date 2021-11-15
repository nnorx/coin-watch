import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">
            <h2 className="text-center text-#84a98c mt-3 mb-4">Coin Watch</h2>
            </Link>
        </div>
    )
}

export default Header;
