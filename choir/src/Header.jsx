function Header({ goToHome }) {
    return (
        <header className="header" onClick={goToHome}>
            <h1 className='header__title'>Crescendo Voices</h1>
        </header>
    );
}

export default Header;
