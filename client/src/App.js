import React from "react";
import './App.css';
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainList from "./components/MainList";
import MainPage from "./components/MainPage";
import Task from "./components/Task";

function App() {
  const [pages, setPages] = React.useState({
      mainPage: true,
      mainList: false,
      task: false
  })

  const getPage = (type) => {
    const obj = {
        mainPage: false,
        mainList: false,
        task: false,
    }

    type === 'Система управления' && (obj.mainList = true)
    type === 'Главная' && (obj.mainPage = true)
    type === 'Задание' && (obj.task = true)

    setPages(obj)
  }

  return (
    <div className="App">
      <Header routeMenu={(type) => getPage(type)}/>
      <MainLayout>
          {pages.mainPage && <MainPage onClick={(type) => getPage(type)}/>}
          {pages.mainList && <MainList/>}
          {pages.task && <Task />}
      </MainLayout>
    </div>
  );
}

export default App;
