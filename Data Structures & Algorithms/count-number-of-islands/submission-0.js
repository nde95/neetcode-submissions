class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        let visited = new Set();

        const bfs = (r, c) => {
            const queue = [];
            visited.add(`${r}, ${c}`)
            queue.push([r, c]);

            while (queue.length > 0) {
                const [row, col] = queue.shift();
                const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr >= 0 && nr < rows && nc < cols && nc >= 0 && grid[nr][nc] === "1" && !visited.has(`${nr}, ${nc}`)) {
                        queue.push([nr, nc])
                        visited.add(`${nr}, ${nc}`)
                    }
                }
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1" && !visited.has(`${r}, ${c}`)) {
                    islands += 1;
                    bfs(r, c)
                }
            }
        }

        return islands
    }
}
