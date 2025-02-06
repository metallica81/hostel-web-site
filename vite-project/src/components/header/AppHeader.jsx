import Logo from './header__assets/AppLogo/AppLogo'
import './styleHeader.scss';
import './header__assets/stylePanel.scss';
import './header__assets/styleNavButton.scss';
//import './header__assets/styleMain.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="panel">
                <Logo />
                <nav className="nav">
                    <button className="header__nav-button">Главная</button>
                    <button className="header__nav-button">Преимущества</button>
                    <button className="header__nav-button">Номера</button>
                    <button className="header__nav-button">Отзывы</button>
                    <button className="header__nav-button">Местопололжение</button>
                    <button className="header__nav-button">Бронировать</button>
                </nav>
            </div>
        </header>
    )
    
}