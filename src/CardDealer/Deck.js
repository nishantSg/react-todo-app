import React, { Component } from "react";
import Axios from "axios";
import Card from "./Card";
const API_URL_BASE = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = { deck: null, drawn: [] };
	}

	async componentDidMount() {
		let response = await Axios.get(`${API_URL_BASE}new/shuffle/`);
		this.setState({ deck: response.data });
	}

	getCard = async event => {
		let deck_id = this.state.deck.deck_id;
		try {
			let cardURL = `${API_URL_BASE}/${deck_id}/draw`;
			let cardResponse = await Axios.get(cardURL);
			if (!cardResponse.data.success) {
				throw new Error("Did Not Received a Card in Response");
			}
			let card = cardResponse.data.cards[0];
			this.setState(st => ({
				drawn: [
					...st.drawn,
					{
						id: card.code,
						image: card.image,
						name: `${card.value} of ${card.suit}`
					}
				]
			}));
		} catch (error) {
			alert(error);
		}
	};

	render() {
		let cards = this.state.drawn.map(card => (
			<Card key={card.id} image={card.image} name={card.name} />
		));
		return (
			<div>
				<h1>Something</h1>
				{cards}
				<button onClick={this.getCard}>Get Card</button>
			</div>
		);
	}
}

export default Deck;
