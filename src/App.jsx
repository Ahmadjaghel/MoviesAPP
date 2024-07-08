// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Add from "./Components/Add";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import ContextProvider from "./Context/context";
function App() {
  return (
    <>
      <ContextProvider>
        <div>
          <Nav />
          <Routes>
            <Route path="/" Component={WatchList} />
            <Route path="/Watched" Component={Watched} />
            <Route path="/Add" Component={Add} />
          </Routes>
        </div>
      </ContextProvider>
    </>
  );
}
export default App;
