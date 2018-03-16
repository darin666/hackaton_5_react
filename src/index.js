import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Task from './tasks/tasks.js';

class App extends React.Component {
	render() {
		return (
			<h1>Hello, Hackathon!</h1>
		)
	}

	componentWillMount() {
		fetch('http://worklog.podlomar.org/tasks')
			.then(response => response.json())
			.then(
				(json) => {
					this.setState(
						{
							tasks: json
						}
					);
				}
			);
	}

	render() {
		return (
			<div className="container">
				{
					this.state.tasks.map(
						(task) => {
							return (
								<Task
									title={task.title}
									time={task.time}
									description={task.description} />
							)
						}
						// Elementary school:
						// task => <task user={task.user} text={task.text} />
					)
				}
			</div>
		)
	}
}



ReactDOM.render(
	<App />,
	document.getElementById('app')
)