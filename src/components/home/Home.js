import { Component } from "react";
import Card from "./card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroe: {
        "id": "69",
        "name": "Batman",
        "powerstats": {
          "intelligence": "81",
          "strength": "40",
          "speed": "29",
          "durability": "55",
          "power": "63",
          "combat": "90"
        },
        "biography": {
          "full-name": "Terry McGinnis",
          "alter-egos": "No alter egos found.",
          "aliases": [
            "Batman II",
            "The Tomorrow Knight",
            "The second Dark Knight",
            "The Dark Knight of Tomorrow",
            "Batman Beyond"
          ],
          "place-of-birth": "Gotham City, 25th Century",
          "first-appearance": "Batman Beyond #1",
          "publisher": "DC Comics",
          "alignment": "good"
        },
        "appearance": {
          "gender": "Male",
          "race": "Human",
          "height": [
            "5'10",
            "178 cm"
          ],
          "weight": [
            "170 lb",
            "77 kg"
          ],
          "eye-color": "Blue",
          "hair-color": "Black"
        },
        "work": {
          "occupation": "-",
          "base": "21st Century Gotham City"
        },
        "connections": {
          "group-affiliation": "Batman Family, Justice League Unlimited",
          "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
        },
        "image": {
          "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"
        }

      },
    }
  }
  render() {
    return (
      <div className="row home">
        <h1 className="col-sm-12">Home SuperHeroes</h1>
        <Card superheroe={this.state.superheroe}></Card>
        <Card superheroe={this.state.superheroe}></Card>
      </div>

    );
  }
}

export default Home;