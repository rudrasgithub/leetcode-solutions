/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {

    let min_time = Infinity;
    for(let i=0;i<tasks.length;i++) {
        min_time = Math.min(min_time, tasks[i][0] + tasks[i][1])
    }

    return min_time
};