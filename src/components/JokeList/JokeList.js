import React, {Component} from 'react';
import axios from 'axios';
import Joke from '../Joke/Joke';
import './JokeList.css'
import { v4 as uuidv4 } from 'uuid';

class JokeList extends Component{
    static defaultProps = {
        numJokesToCall : 10
    };

    state = { jokes: [] };

    async componentDidMount() {
        let jokes = [];
        while(jokes.length < this.props.numJokesToCall){
            const {data: {joke}} = await axios.get("https://icanhazdadjoke.com/",
                        {headers: {Accept: 'application/json'}}
                    );
            //setting the initial state
            jokes.push({ joke: joke, votes: 0, id: uuidv4() });
        }
        this.setState({jokes:jokes});
    }
    handleVotes = (id, voteType) => {
        this.setState(st => ({
            jokes: st.jokes.map((e) => 
                e.id === id ? {...e, votes: e.votes + voteType} : e
            )
        }))
    }
    
    render() {
        const loading = this.state.jokes.length == 0 && 'Loading...';
        return(
            
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">
                        <span>DAD </span>JOKES
                    </h1>
                    <img 
                        src='/sidebar-emoji.png'
                    />
                    <button>NEW JOKES</button>
                    
                </div>    
                
                <div className="JokeList-jokes">
                {this.state.jokes.map(each => <Joke 
                    votes={each.votes}
                    joke={each.joke}
                    key={each.id}
                    id={each.id}
                    upVote={()=> this.handleVotes(each.id, +1)}
                    downVote={()=> this.handleVotes(each.id, -1)}
                />)}
                <load className="Loading">{loading}</load>
                </div>
            </div>
        )
    }
}

export default JokeList;