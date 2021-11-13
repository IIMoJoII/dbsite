import '../App.css';
import React from "react";

function MainPage({onClick}) {
    return (
        <div className="MainPage">
            <div className="MainPageItem" onClick={() => onClick('Задание')}>Задание</div>
            <div className="MainPageItem" onClick={() => onClick('Структура')}>Структура базы данных</div>
            <div className="MainPageItem" onClick={() => onClick('Система управления')}>Система управления</div>
        </div>
    );
}

export default MainPage;