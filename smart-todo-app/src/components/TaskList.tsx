import React from 'react';
import TaskItem from './TaskItem';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
};

export default TaskList;