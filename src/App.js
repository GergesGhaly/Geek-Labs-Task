import "./App.css";
import Filters from "./Components/Filters";
import SideMenu from "./Components/SideMenu";
import Alerts from "./Pages/Alerts";

function App() {
  return (
    <div className="App flex bg-[#202020]  h-screen w-screen  ">
      <SideMenu />
      <Alerts />
      <Filters />
    </div>
  );
}

export default App;
