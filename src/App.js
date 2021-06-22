import Nav from "./components/nav/Nav"
import Login from "./components/login/Login"
import Footer from "./components/footer/Footer"
import "./App.css"
import Home from "./components/home/Home"
import { Route } from "react-router"
import { HashRouter } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav></Nav>
        <Route path={["/home", "/"]} component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Footer></Footer>
      </div>
    </HashRouter>
  );

}
export default App;
