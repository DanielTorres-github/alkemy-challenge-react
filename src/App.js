import Nav from "./components/nav/Nav"
import Login from "./components/login/Login"
import Footer from "./components/footer/Footer"
import "./App.css"
import Home from "./components/home/Home"
import { Route } from "react-router"
import { HashRouter } from "react-router-dom"
import Profile from "./components/profile/Profile"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav></Nav>
        <Route exact path={["/home"]} component={Home}></Route>
        <Route exact path={["/login", "/"]} component={Login}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Footer></Footer>
      </div>
    </HashRouter>
  );

}
export default App;
