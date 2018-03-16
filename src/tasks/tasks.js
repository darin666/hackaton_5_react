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
    constructor(props) {
		super(props);

		this.state = {
			isOpen : false
		};
	}

    render() {
        let myClass = "";
        if(this.state.isOpen) {
            myClass = "task-open"
        }else{
            myClass = "task"
        }

		return (
			<div className={myClass}>
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
                        <button onClick={this.handleClick.bind(this)}>
                            <img src={bottom}/>
                        </button>
                    </div>
                </div>
                {this.state.isOpen && <TaskLog />}
			</div>
		);
    }

    handleClick() {
		if(this.state.isOpen) {
		this.setState(
			{
				isOpen: false,
			}
        );
    }else{this.setState(
        {
                isOpen: true,
        }
    );
    }

    }
}

class TaskLog extends React.Component {
    render() {
        return (
            <div>
                <LogList />
                <LogForm />
            </div>
        )
    }
}

class LogList extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			logs : []
		};
	}

    componentWillMount() {
        fetch('http://worklog.podlomar.org//task/<key>/logs')
            .then(response => response.json())
            .then(
                (json) => {
                    this.setState(
                        {
                        logs: json
                }
            );
        }
    );
}

    render() {
        return (
            <div className="log-list">
                {this.state.logs.map(
                    (log) => {
                        return (
                        <Task
                            user={log.user}
                            description={log.description} />
                        )
                    }
                )
            }
            </div>
            )
        }
}

class LogForm extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: ""
		}
	}

	render() {
		return (
			<div className="log-form">
				<label>name:
					<input
						type="text"
						name="name"
						value={this.state.name}
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