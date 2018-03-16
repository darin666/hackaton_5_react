import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

export default class TaskList extends React.Component {
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
