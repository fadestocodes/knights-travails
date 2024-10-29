const knightsMoves = (start, end) => {
    
    const moves = [ [2,1], [2,-1], [1,2], [1,-2], [-1,2], [-1,-2], [-2,1], [-2,-1] ];

    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());
    
    while (queue.length > 0){
        let [current, path] = queue.shift();

        if ( current[0] === end[0] && current[1] === end[1] ){
            return path;
        }

        for (let [x, y] of moves){
            let next = [current[0] + x, current[1] + y];
            if (next[0] >= 0 && next[0] < 8 && next[1] >=0 && next[1] < 8 && !visited.has(next.toString())){
                visited.add(next.toString());
                queue.push([next, [...path, next]]);

                

            }
        }

        

    }
    return null;


}


console.log((knightsMoves([0,0],[7,7])));

