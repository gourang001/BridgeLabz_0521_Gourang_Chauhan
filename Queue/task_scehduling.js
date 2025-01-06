function canCompleteTasks(tasks){
    tasks.sort((a, b) => a.deadline - b.deadline);
    
    let currentTime = 0;

    for (let i = 0; i < tasks.length; i++) {
        currentTime += tasks[i].duration;
        
        if (currentTime > tasks[i].deadline) {
            return false;
        }
    }
    return true;
}

// Example usage:
const tasks = [
    { duration: 3, deadline: 5 },
    { duration: 2, deadline: 7 },
    { duration: 4, deadline: 6 }
];

console.log(canCompleteTasks(tasks)); 
