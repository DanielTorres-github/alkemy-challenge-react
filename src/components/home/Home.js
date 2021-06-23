import { Component } from "react";
import Card from "./card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroe: [{
        //-------BATMAN----------------------------
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
       //----DEADPOOL------------------------------- 
       {
        "response": "success",
        "id": "213",
        "name": "Deadpool",
        "powerstats": {
            "intelligence": "69",
            "strength": "32",
            "speed": "50",
            "durability": "100",
            "power": "100",
            "combat": "100"
        },
        "biography": {
            "full-name": "Wade Wilson",
            "alter-egos": "Evil Deadpool, Venompool",
            "aliases": [
                "Wade Wilson",
                "Jack",
                "Chiyonosake (\"the Wolf of the Rice Wine\")",
                "Rhodes",
                "Corpus",
                "Lopez",
                "Hobgoblin",
                "Thom Cruz",
                "Peter Parker"
            ],
            "place-of-birth": "Canada",
            "first-appearance": "New Mutants #98 (February, 1991)",
            "publisher": "Evil Deadpool",
            "alignment": "neutral"
        },
        "appearance": {
            "gender": "Male",
            "race": "Mutant",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "210 lb",
                "95 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others",
            "base": "Cavern-X, Sedona, Arizona, Mobile"
        },
        "connections": {
            "group-affiliation": "Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L",
            "relatives": "Thomas \"Mickey\" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg"
        }
    }
      ],
    }
  }
  render() {
    return (
      <div className="row home">
        <h1 className="col-sm-12">Home SuperHeroes</h1>
        <Card superheroe={this.state.superheroe[0]}></Card>
        <Card superheroe={this.state.superheroe[1]}></Card>
      </div>

    );
  }
}

export default Home;