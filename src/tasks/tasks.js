import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

export default class TaskList extends React.Component {

	render() {
		return (
			<div className="task-list">
                <Task
                    name="ahoj"
                    time="5"
                    description="test" />
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