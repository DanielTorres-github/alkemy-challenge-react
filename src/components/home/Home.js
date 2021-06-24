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
    },
    {
      "response": "success",
      "id": "316",
      "name": "Hawkman",
      "powerstats": {
          "intelligence": "null",
          "strength": "66",
          "speed": "null",
          "durability": "null",
          "power": "null",
          "combat": "null"
      },
      "biography": {
          "full-name": "Carter Hall",
          "alter-egos": "No alter egos found.",
          "aliases": [
              "-"
          ],
          "place-of-birth": "-",
          "first-appearance": "FLASH COMICS #1 (January 1940)",
          "publisher": "DC Comics",
          "alignment": "good"
      },
      "appearance": {
          "gender": "Male",
          "race": "null",
          "height": [
              "6'1",
              "185 cm"
          ],
          "weight": [
              "195 lb",
              "88 kg"
          ],
          "eye-color": "Blue",
          "hair-color": "Brown"
      },
      "work": {
          "occupation": "Adventurer",
          "base": "-"
      },
      "connections": {
          "group-affiliation": "Justice Society of America, Justice League of America, All-Star Squadron",
          "relatives": "Shiera Sanders Hall (wife, deceased; soul currently inhabiting the body of Kendra Saunders), Hector Hall (son, deceased), Daniel Hall (grandson), Lyta Trevor Hall (daughter-in-law, deceased)"
      },
      "image": {
          "url": "https://www.superherodb.com/pictures2/portraits/10/100/839.jpg"
      }
  },
  {
    "response": "success",
    "id": "423",
    "name": "Magneto",
    "powerstats": {
        "intelligence": "88",
        "strength": "80",
        "speed": "27",
        "durability": "84",
        "power": "91",
        "combat": "80"
    },
    "biography": {
        "full-name": "Erik Magnus Lensherr",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "The Creator",
            "Erik Magnus Lehnsherr",
            "Michael Xavier",
            "White Pilgrim",
            "Erik the RedThe Master of Magnetism"
        ],
        "place-of-birth": "Unrevealed, probably somewhere in Northern Europe",
        "first-appearance": "X-MEN Vol. 1 #1",
        "publisher": "Marvel Comics",
        "alignment": "bad"
    },
    "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
            "6'2",
            "188 cm"
        ],
        "weight": [
            "190 lb",
            "86 kg"
        ],
        "eye-color": "Grey",
        "hair-color": "White"
    },
    "work": {
        "occupation": "Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent",
        "base": "Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
    },
    "connections": {
        "group-affiliation": "Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes",
        "relatives": "Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/12.jpg"
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
        <Card superheroe={this.state.superheroe[2]}></Card>
        <Card superheroe={this.state.superheroe[3]}></Card>
      </div>

    );
  }
}

export default Home;