export const generateUniqueId = (): string => {
    return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const filterCompletedTasks = (tasks: Array<{ completed: boolean }>): Array<{ completed: boolean }> => {
    return tasks.filter(task => !task.completed);
};