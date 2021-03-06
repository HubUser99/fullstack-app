import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Counter from './Counter.js';

const styles = theme => ({
	root: {
		
	},
	content: {
		paddingTop: '100px',
		height: '100vh',
		'@global': {
			code: {
				width: '150px',
				height: '35px',
				marginLeft: '10px',
				color: 'green',
				backgroundColor: 'black',
				overflow: 'hidden',
				position: 'absolute',
			},
			
		}
	},
	note: {
		marginTop: '100px',
		marginBottom: '50px',
		fontSize: '15pt',
	},
});

class Home extends Component {
	state = {
		authorized: false
	};

	render() {
		return (
			<div className={this.props.classes.root}>
				<Grid container className="Home" justify="center">
					<Grid item className={this.props.classes.content} xs={8} sm={10} md={10}>
						<Grid container justify="center">
							<Grid item className="WelcomeText" xs={12} sm={4} md={3}>
								<h3>Welcome to</h3>
								<code><h1>usercount</h1></code> 
								<br/>
							</Grid>
						</Grid>
						<Grid container justify="flex-start">
							<Grid item xs={12} sm={4}>
								<div className={this.props.classes.note}>
									Usercount is a service which main function is to count how many users have
									registered to it.
								</div>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item xs={12} sm={4}>
								<div className={this.props.classes.note}>
									Counter of registered users you can see below.
								</div>
							</Grid>
						</Grid>
						<Grid container justify="flex-end">
							<Grid item xs={12} sm={4}>
								<div className={this.props.classes.note}>
									Register yourself and make impact on the counter!
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Counter/>
						</Grid>
					</Grid>
			{/*
				<div className="Home">
					<div className="Content">
						<div className="WelcomeText">
							<sub><h3>Welcome to </h3></sub><code><h1>usercount</h1></code> <br/>
						</div>
						<div className="Description">
							<blockquote id="bc-1">
								Usercount is a service which main function is to count how many users have
								registered to it.
							</blockquote>
							<blockquote id="bc-2">
								Counter of registered users you can see below.
							</blockquote>
							<blockquote id="bc-3">
								Register yourself and make impact on the counter!
							</blockquote>
						</div>
					</div>
					<Counter />
				</div>
			*/}
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Home);