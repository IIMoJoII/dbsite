import '../App.css';

function Header({routeMenu}) {
    return (
        <div className="Header">
            <h1 className="HeaderText">
                Гостиницы CRM
            </h1>
            <div className="headerMenu">
                <span onClick={() => routeMenu('Главная')}>Главная</span>
                <span onClick={() => routeMenu('Задание')}>Задание</span>
                <span onClick={() => routeMenu('Структура')}>Структура БД</span>
                <span onClick={() => routeMenu('Система управления')}>Система управления</span>
            </div>
        </div>
    );
}

export default Header;