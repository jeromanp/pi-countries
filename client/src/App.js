import style from "./App.module.css";
import Home from "./components/Homes/Home";
import Landindg from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
// import NotFound from "./components/NotFound/NotFound";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className={style.container}>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landindg} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/activities" component={Form} />
      <Route path="/about" component={About} />
      <Route path="/getactivities" component={Activities} />
      {/* <Route component={NotFound} /> */}
    </div>
  );
}

export default App;
