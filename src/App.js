import React, {Component} from 'react';

export default class App extends Component {
	
	constructor() {
		super();
		this.state = {
			persons: []
		}
	}

	componentDidMount() {
		fetch('/api')
			.then(response => response.json())
			.then(data => {
				var persons = [];
				this.setState({
					persons: persons.concat(data)
				});
			});
	}

	render() {
		
		
		const list = this.state.persons.map(person => {
			const key = Math.floor(Math.random() * 100);
			return <li key={key}>{person.name}</li>	
		});
		
		return(
			<div>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}
