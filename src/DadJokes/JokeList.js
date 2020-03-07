import React, { Component } from "react";
import Axios from "axios";
import "./JokeList.css";
const API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
	static defaultProps = {
		numberOfJokes: 10
	};
	constructor(props) {
		super();
		this.state = { jokes: [] };
	}
	async componentDidMount() {
		let jokesArr = [];
		while (jokesArr.length < this.props.numberOfJokes) {
			let response = await Axios.get(API_URL, {
				headers: { Accept: "application/json" }
			});
			if (response.status === 200)
				jokesArr.push({ joke: response.data.joke, votes: 0 });
		}
		this.setState({ jokes: jokesArr });
	}
	render() {
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1>
						<span>Dad</span> Jokes
					</h1>
					<img
						src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
						alt="Laughing Emoji"
					/>
					<button className="Button">New Jokes</button>
				</div>
				<div className="JokeList-jokes">
					{this.state.jokes.map(joke => (
						<p>
							{joke.joke} - {joke.votes}
						</p>
					))}
				</div>
			</div>
		);
	}
}

export default JokeList;
