import React, { Component } from "react";
import Axios from "axios";

class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = { quote: "" };
	}
	componentDidMount() {
		Axios.get("http://api.github.com/zen").then(response =>
			setTimeout(
				function() {
					this.setState({ quote: response.data });
				}.bind(this),
				3000
			)
		);
	}

	render() {
		return <h1>{this.state.quote}</h1>;
	}
}

export default Loader;
