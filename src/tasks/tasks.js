import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

export class TaskForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			time: "",
			description: ""
		}
	}

	render() {
		return (
			<div className="post-form">
				<label>name:
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.dataChanged.bind(this)}/>
				</label>
				<label>time:
					<input
						type="text"
						name="time"
						value={this.state.time}
						onChange={this.dataChanged.bind(this)}/>
				</label>
                <label>description:
					<input
						type="text"
						name="description"
						value={this.state.description}
						onChange={this.dataChanged.bind(this)}/>
				</label>
				<button onClick={this.sendPost.bind(this)}>send</button>
			</div>
		)
	}

	dataChanged(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	sendPost() {
		fetch('http://worklog.podlomar.org/tasks/create',
			{
				mode: 'no-cors',
				method: "POST",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then(function(response) {
			location.reload();
		});
	}
}


export class TaskList extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			tasks : []
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
			<div className="task-list">
                {this.state.tasks.map(
                    (task) => {
                        return (
                         <Task
                            name={task.name}
                            time={task.time}
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
				<div className="top-line">
				    <span className="task-name">
    					{this.props.name}
    				</span>

    				<span className="task-time">
    					{this.props.time}
    				</span>
				</div>

                <div className="bottom-line" >
                    <div className="task-description">
                        {this.props.description}
                    </div>

                    <div className="task-collapse">
                        <img src={bottom}/>
                    </div>
                </div>
			</div>
		);
	}
}
