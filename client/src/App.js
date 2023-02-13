import style from "./App.module.css";
import Home from "./components/Homes/Home";
import Landindg from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className={style.container}>
      {location.pathname === "/" ? null :<NavBar /> }
      <Switch>
        <Route exact path="/" component={Landindg} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/activities" component={Form} />
        <Route exact path="/about" component={About} />
        <Route exact path="/getactivities" component={Activities} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
