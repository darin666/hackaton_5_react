import React from 'react';
import './tasks.css';
import bottom from './img/bottom.png';

class Task extends React.Component {
	render() {
		return (
			<div className="task">
				<div className="task-title">
					{this.props.title}
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