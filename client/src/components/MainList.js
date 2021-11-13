import React from "react";
import '../App.css';
import TotalInfo from "./TotalInfo";

function MainList() {
    const [mainList, setMainList] = React.useState(
        [
            {label: "Перечень и общее число фирм, забронировавших места", isPicked: false},
            {label: "Перечень и общее число постояльцев", isPicked: false},
            {label: "Количество свободных номеров с указанными характеристиками", isPicked: false},
            {label: "Сведения о конкретном свободном номере", isPicked: false},
            {label: "Занятые номера, которые освободятся к указанному сроку", isPicked: false},
            {label: "Объём бронирования указанной фирмой за указанный период", isPicked: false},
            {label: "Список недовольных постояльце и их жалобы", isPicked: false},
            {label: "Данные о рентабельности номеров", isPicked: false},
            {label: "Сведения о постояльце из заданного номера", isPicked: false},
            {label: "Сведения о фирмах и бронировании на указанный период", isPicked: false},
            {label: "Сведения о наиболее часто посещающих гостиницу клиентах", isPicked: false},
            {label: "Сведения о конкретном постояльце", isPicked: false},
            {label: "Сведения о том, кем был занят номер в определённый период", isPicked: false},
            {label: "Сведения о новых клиентах в определённый период", isPicked: false},
            {label: "Процентное соотношение всех номеров к номерам, бронируемых фирмой", isPicked: false},
        ]
    )

    const clickItem = (index) => {
        const newList = [...mainList]
        newList.forEach(item => item.isPicked = false)
        newList[index].isPicked = true

        setMainList(newList)
    }

    return (
        <div className="MainList">
            <div className='list'>
                <TotalInfo />
                <ul>
                    {mainList.map((item, index) => <li key={item.label} className={`${item.isPicked && "picked" }`} onClick={() => clickItem(index)}>{item.label}</li>)}
                </ul>
            </div>
            <div className='result'>
                {mainList && mainList.map(item => item.isPicked && <div>{item.label}</div>)}
            </div>
        </div>
    );
}

export default MainList;