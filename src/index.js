import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import TaskList from './tasks/tasks.js';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Taskmaster 3000</h1>
				<TaskList />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)