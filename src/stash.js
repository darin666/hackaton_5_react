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

this.state.tasks.map(
    (task) => {
        return (
            <Task
                name={task.name}
                description={task.description} />
        )
    }
)