class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let row = 0; row < 9 ; row++) {
            const seen = new Set<string>();
            for (let col = 0; col <  9 ; col++) {
                const current = board[row][col]
                if (current === ".") {
                    continue;
                }

                if(seen.has(current)){
                    return false;
                } else {
                    seen.add(current);
                }
            }
        }

        for (let col = 0; col < 9; col++) {
            const seen = new Set<string>();
            for (let row = 0; row < 9; row++) {
                const current = board[row][col];

                if (current === ".") {
                    continue;
                }

                if(seen.has(current)) {
                    return false;
                } else {
                    seen.add(current);
                }
            }
        }

        for (let row = 0; row < 9; row+=3){
            for (let col = 0; col < 9; col+=3){
                const seen = new Set<string>();
                for (let i = 0; i < 3; i++){
                    for (let j = 0; j < 3; j++){
                        const current = board[row+i][col+j];

                        if (current === "."){
                            continue;
                        } 

                        if (seen.has(current)) {
                            return false;
                        } else {
                            seen.add(current);
                        }
                    }
                }
            }
        }

        return true;
    }
}
