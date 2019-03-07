import React, { Component } from 'react';
import axios from "axios";
import history from '../tools/history.js';

class Auth extends Component {

	state = {
		valid: null,
		data: [],
		id: 0,
		username: null,
		password: null,
		intervalIsSet: false
	};

	componentDidMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	getDataFromDb = () => {
		fetch(window.location.protocol + "//" + window.location.hostname + ":3001/api/getData")
		.then(data => data.json())
		.then(res => this.setState({ data: res.data }));
	};

	putDataToDB = (username, password) => {
		let currentIds = this.state.data.map(data => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post(window.location.protocol + "//" + window.location.hostname + ":3001/api/putData", {
			id: idToBeAdded,
			username: username,
			password: password
		});
	};

	deleteFromDB = idTodelete => {
		let objIdToDelete = null;
		this.state.data.forEach(dat => {
			if (dat.id === idTodelete) {
				objIdToDelete = dat._id;
			}
		});

		axios.delete(window.location.protocol + "//" + window.location.hostname + ":3001/api/deleteData", {
			data: {
				id: objIdToDelete
			}
		});
	};

	updateDB = (idToUpdate, updateToApply) => {
		let objIdToUpdate = null;
		this.state.data.forEach(dat => {
			if (dat.id === idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});

		axios.post(window.location.protocol + "//" + window.location.hostname + ":3001/api/updateData", {
			id: objIdToUpdate,
			update: { message: updateToApply }
		});
	};

	validate = (hash, password, username) => {
		axios.post(window.location.protocol + "//" + window.location.hostname + ":3001/api/validate", {
			hash: hash,
			password: password
		})
		.then((response) => {
			this.setState({
				valid: response.data.data
			});
			if (response.data.data) {
				this.setSession(username);
				history.push('/');
			} else {
				console.log("no");
			}
		})
		.catch(function (error) {
			console.log(error);
		})
	}

	authorize = (username, password) => {
		const users = this.state.data.map(x => x.username);
		const hashes = this.state.data.map(x => x.password);
		if (users.includes(username)) {
			const hash = hashes[users.indexOf(username)];
			this.validate(hash, password, username);
		} else {
			this.putDataToDB(username, password);
			sessionStorage.setItem('username', username);
			history.push('/');
		}
	}

	setSession = (username) => {
		sessionStorage.setItem('username', username);
	}

	render() {
		const { data } = this.state;
		return (
			<div className="Auth">
				<div className="Content">
					<ul>
						{data.length <= 0
							? "NO DB ENTRIES YET"
							: "Last registered user: " + data[data.length - 1].username
						}
					</ul>
					{sessionStorage.getItem('username') 
						? "Hello " + sessionStorage.getItem('username')
						: <div style={{ padding: "10px" }}>
						<input
							type="text"
							onChange={e => this.setState({ username: e.target.value })}
							placeholder="username"
							style={{ width: "200px" }}
						/>
						<input
							type="text"
							onChange={e => this.setState({ password: e.target.value })}
							placeholder="password"
							style={{ width: "200px" }}
						/>
						<button onClick={() => this.authorize(this.state.username, this.state.password)}>
							ADD
						</button>
					</div> 
					}
				</div>
			</div>
		);
	}
}

export default Auth;