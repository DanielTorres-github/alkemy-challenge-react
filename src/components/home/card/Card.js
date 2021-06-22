import { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div class="card col-sm-12 col-lg-2">
            <div class="card-header">{this.props.superheroe.name}</div>
            <div class="card-body">
                <img src={this.props.superheroe.image.url} alt="" className="cardfoto"/>
            </div> 
            <div class="card-footer">
                <ul>
                    <li>Inteligencia: {this.props.superheroe.powerstats.intelligence}</li>
                    <li>Fuerza: {this.props.superheroe.powerstats.strength}</li>                    
                    <li>Velocidad: {this.props.superheroe.powerstats.speed}</li>                    
                    <li>Resistencia: {this.props.superheroe.powerstats.durability}</li>                    
                    <li>Poder: {this.props.superheroe.powerstats.power}</li>                    
                    <li>Cambate: {this.props.superheroe.powerstats.combat}</li>                    
                </ul>
            </div>
        </div>
         );
    }
}
 
export default Card;