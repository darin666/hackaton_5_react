import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

export default class TaskList extends React.Component {

	render() {
		return (
			<div className="task-list">
                <Task
                    name="Ahoj"
                    time="5 hours"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis ullamcorper eros nec mattis. Donec ultricies congue eleifend. Suspendisse suscipit auctor nibh ut lobortis. In a porttitor elit, vel sodales purus. Vestibulum luctus lacus et porttitor interdum. Mauris quis diam." />
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