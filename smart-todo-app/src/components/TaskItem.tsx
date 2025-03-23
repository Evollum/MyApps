import React from 'react';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`flex items-center justify-between p-4 border-b ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="mr-2"
                />
                <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
            </div>
            <button onClick={() => onDelete(task.id)} className="text-red-500">
                Delete
            </button>
        </div>
    );
};

export default TaskItem;