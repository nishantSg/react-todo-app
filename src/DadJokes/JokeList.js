import React, { Component } from "react";
import Axios from "axios";
import Joke from "./Jokes";
import { v4 as uuidv4 } from "uuid";
import "./JokeList.css";
const API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
	static defaultProps = {
		numberOfJokes: 10
	};
	//
	constructor(props) {
		super();
		this.state = {
			loading: false,
			jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]")
		};
		this.seenJokes = new Set(this.state.map(joke => joke.text));
	}
	//
	componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes();
	}
	//
	getJokes = async () => {
		try {
			let jokesArr = [];
			while (jokesArr.length < this.props.numberOfJokes) {
				let response = await Axios.get(API_URL, {
					headers: { Accept: "application/json" }
				});
				let joke = response.data.joke;
				if (!this.seenJokes.has(joke)) {
					jokesArr.push({ id: uuidv4(), text: joke, votes: 0 });
				}
			}
			this.setState(
				st => ({ jokes: [...st.jokes, ...jokesArr], loading: false }),
				() =>
					window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
			);
		} catch (error) {
			alert(error);
		}
	};
	//
	handleButtonClick = () => {
		this.setState({ loading: true }, this.getJokes);
	};
	//
	handleVotes = (id, delta) => {
		this.setState(
			st => ({
				jokes: st.jokes.map(joke =>
					joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
				)
			}),
			() =>
				window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
		);
	};
	//
	render() {
		if (this.state.loading) {
			return (
				<div className="Loader">
					<i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true"></i>
					<h1>Loading</h1>
				</div>
			);
		}
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
					<button className="Button" onClick={this.handleButtonClick}>
						New Jokes
					</button>
				</div>
				<div className="JokeList-jokes">
					{this.state.jokes.map(joke => (
						<Joke
							key={joke.id}
							votes={joke.votes}
							text={joke.text}
							upvote={() => this.handleVotes(joke.id, 1)}
							downvote={() => this.handleVotes(joke.id, -1)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default JokeList;
