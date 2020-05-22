import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {

    getObject() {
        if (this.props.votes >=15) {
            return { color: "#4CAF50", emoji: "em em-rolling_on_the_floor_laughing" }
        } else if (this.props.votes >=12) {
            return { color: "#8BC34A", emoji: "em em-laughing" }
        } else if (this.props.votes >=9) {
            return { color: "#CDDC39", emoji: "em em-smiley" }
        } else if (this.props.votes >=6) {
            return { color: "#FFEB3B", emoji: "em em-slightly_smiling_face" }
        } else if (this.props.votes >=3) {
            return { color: "#FFC107", emoji: "em em-neutral_face" }
        } else if (this.props.votes >=0) {
            return { color: "#FF9800", emoji: "em em-confused" }
        } else {
            return { color: "red", emoji: "em em-angry" }
        }
    }
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i onClick={this.props.upVote}  
                    className="fa fa-arrow-up"
                    ></i>
                    <span className="Joke-votes"
                    style={{borderColor: this.getObject().color}}
                    >{this.props.votes}</span>
                    <i className="fa fa-arrow-down" 
                    onClick={this.props.downVote}
                    ></i>
                </div>
                <div className="Joke-text">
                    {this.props.joke}
                </div>
                <div className="Joke-emoji">
                    <i className={this.getObject().emoji}></i>
                </div>
            </div>
        )
    }
}
export default Joke;