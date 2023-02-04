//import "./App.css";
import Home from "./components/Homes/Home";
import Landindg from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landindg} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail" component={Detail} />
      <Route path="/activities" component={Form} />
    </div>
  );
}

export default App;
