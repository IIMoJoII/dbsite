import './App.css';
import Header from "./components/Header";
import MainLayout from "./layouts/MainLayout";
import MainList from "./components/MainList";

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
          <MainList />
          <div>321</div>
      </MainLayout>
    </div>
  );
}

export default App;
