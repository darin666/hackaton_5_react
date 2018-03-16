import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

export class Task extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			loaded: false
		};
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
									name={task.name}
									description={task.description} />
							)
						}
					)
				}
			</div>
		)
	}
}

class Task extends React.Component {
    render() {
		return (
			<div className="task">
				<div className="task-name">
					{this.props.name}
				</div>

				<div className="task-time">
					{this.props.time}
				</div>

                <div className="task-description">
                    {this.props.description}
                </div>

                <div className="task-collapse">
                    <img src={bottom}/>
                </div>
			</div>
		);
	}
}