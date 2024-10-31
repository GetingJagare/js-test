const n = 10;

const fillSpiralMatrix = (matrix) => {
    const x0 = (matrix[0].length - 1) / 2;
    const y0 = (matrix.length - 1) / 2;
    
    let curNum = 1;
    matrix[x0][y0] = curNum;
    const maxNum = Math.pow(matrix.length, 2);
    
    let r = 0;
    let x = x0;
    let y = y0;

    while (curNum <= maxNum) {
        matrix[x][y] = curNum;
        curNum++;

        const isLoopEnded = x - x0 === -r && y === y0 + r;

        if (isLoopEnded) {
            y ++;
            r ++;
        } else {
            switch (true) {
                case (x < x0 + r) && (y - y0 === r):
                    x++;
                    break;
                case (x - x0 === r) && (y - y0 === r || y - y0 > -r):
                    y--;
                    break;
                case (x - x0 === r || x - x0 > -r) && (y - y0 === -r):
                    x--; 
                    break;
                case (x - x0 === -r) && (y - y0 === -r || y - y0 < r):
                    y++;
                    break;                  
            }
        }
    }

    return matrix;
}

const createMatrix = (n) => {
    n = parseInt(n);
    if (isNaN(n) || n % 2 === 0 || n <= 1) {
        return [];
    }

    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = (new Array(n)).fill(0);
    }

    matrix = fillSpiralMatrix(matrix);

    return matrix;
}



const getDiagonalsSum = (matrix) => {
    const diags = [[], []];
    let res = 0;

    if (!matrix.length) {
        return res;
    }

    for (let i = 0, j = 0; i < matrix.length && j < matrix[0].length; i++, j++) {
        diags[0].push(matrix[i][j]);
    }

    res += diags[0].reduce((sum, n) => +sum + +n);

    for (let i = matrix.length - 1, j = 0; i >= 0 && j < matrix[0].length; i--, j++) {
        if (i === j) {
            continue;
        }
        diags[1].push(matrix[i][j]);
    }

    res += diags[1].reduce((sum, n) => +sum + +n);

    return res;
}

const matrix = createMatrix(9);
console.log(getDiagonalsSum(matrix));