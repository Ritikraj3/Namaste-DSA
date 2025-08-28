function rottingOranges(grid) {
    let m = grid.length
    let n = grid[0].length
    let queue = []

    //add all rotten oranges in the queue
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) {
                queue.push([i,j,0])
            }
        }
    }

    // Remove each node from queue one by one and 
    // Mark their adj. nodes rotten , if found fresh then push them into queue
    //till its empty

    let maxMin = 0
    while(queue.length) {
        let [x,y,min] = queue.shift()

        if(y < n-1 && grid[x][y+1] === 1) {
            grid[x][y+1] = 2
            queue.push([x,y+1,min+1])
        }
        if(y > 0 && grid[x][y-1] === 1) {
            grid[x][y-1] = 2
            queue.push([x,y-1,min+1])
        }
        if(x < m-1 && grid[x+1][y] === 1) {
            grid[x+1][y] = 2
            queue.push([x+1,y,min+1])
        }
        if(x > 0 && grid[x-1][y] === 1) {
            grid[x-1][y] = 2
            queue.push([x-1,y,min+1])
        }
        maxMin = Math.max(min, maxMin)
    }

    //check if any fresh left then return -1

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                return -1
            }
        }
    }

    return maxMin
}

console.log(rottingOranges([[2,1,1],[0,1,1],[1,0,1]]));
console.log(rottingOranges([[2,1,1],[1,1,0],[0,1,1]]));
console.log(rottingOranges([[0,2]]));
