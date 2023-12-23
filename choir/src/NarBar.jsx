import Button from './Button.jsx';
import './NarBar.css'

function NarBar( {setPage} ) {

    return (
        <nav className="navbar">
            <button className="hamburger-menu" type="button">☰</button>
            <ul className="narbar">
                <li className="narbar__item">
                    <Button className="narbar__link" type="button" visual="link" onClick={() => setPage('Home')}>Home</Button>
                </li>
                <li className="narbar__item">
                    <Button className="narbar__link" type="button" visual="link" onClick={() => setPage('Sing')}>How To Sing</Button>
                </li>
                <li className="narbar__item">
                    <Button className="narbar__link" type="button" visual="link" onClick={() => setPage('Piece')}>Classic Pieces</Button>
                </li>
                <li className="narbar__item">
                    <Button className="narbar__link" type="button" visual="link" onClick={() => setPage('Choir')}>Prominent Chorus</Button>
                </li>
                <li className="narbar__item">
                    <Button className="narbar__link" type="button" visual="link" onClick={() => setPage('Musical')}>Related Music</Button>
                </li>
            </ul>
        </nav>
    );
}

export default NarBar;