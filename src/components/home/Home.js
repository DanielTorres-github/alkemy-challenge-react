import { Component } from "react";
import Card from "./card/Card";
import superheroes from "../../mock/Superheroes.json"

class Home extends Component {
  constructor(props) {
    super(props);
    /**Esta variable JSON tiene linkeado el archivo JSON donde estan guardados los distintos superheroes*/
    this.state = {
      superheroes: superheroes
    }

    this.deleteHero=this.deleteHero.bind(this)
    this.showHero=this.showHero.bind(this)
  }

  /** */
  showHero(heroe) {
    return (<Card superheroe={heroe} deleteHero={this.deleteHero} />)
  }

  deleteHero(id) {
    var filter = this.state.superheroes.filter(function (heroe) { return (heroe.id !== id) });
    this.setState({superheroes: filter});
  }



  render() {
    return (
      <div className="row home">
        <button onClick={() => localStorage.removeItem("token")}>Log out</button>
        <h1 className="col-sm-12">Home SuperHeroes</h1>
        {this.state.superheroes.map(this.showHero)}
      </div>
    );
  }
}

export default Home;