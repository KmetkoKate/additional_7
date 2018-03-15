module.exports = function solveSudoku(matrix) {
  function checkColum(str, colum) {
      for (var j = 0; j < 9; j++) {
          if (j != str && matrix[j][colum] == matrix[str][colum]) {
              return false;
          }
      }
      return true;
  };
    function checkStr(str, colum) {
        for (var i = 0; i < 9; i++) {
          if (i != colum && matrix[str][i] == matrix[str][colum]) {
                return false;
            }
        }
        return true;
    };
    function square(str, colum) {
        var sqStr = Math.floor(str / 3);
        var sqColum = Math.floor(colum / 3);

        for (var i = sqStr * 3; i < sqStr * 3 + 3; i++) {
            for (var j = sqColum  * 3; j < sqColum  * 3 + 3; j++) {
                if (i != str && j != colum && matrix[i][j] == matrix[str][colum]) {
                  return false;
                }
            }
        }
        return true;
    };


    function trakerSc(str, colum) {
        if (matrix[str][colum] === 0) {
            for (var key = 1; key < 10; key++) {
                matrix[str][colum] = key;
                if (test(str, colum) && trakerSc(str, colum)) return true;
            }
            matrix[str][colum] = 0;
            return false;
        } else {
            colum++;
            if (colum > 8) {
                colum = 0;
                str++;
              if (str > 8) return true;
            }
            return trakerSc(str, colum);
        }
}
function test(str, colum) {
    return checkStr(str, colum) && checkColum(str, colum) && square(str, colum);
}
trakerSc(0, 0);
  return matrix;
    };
