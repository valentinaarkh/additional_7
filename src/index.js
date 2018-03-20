module.exports = function solveSudoku(matrix) {
    return solve(matrix);
}

function solve(matrix){
var matrix = matrix;
  for (var i = 0 ; i < 9; i++) {
    for (var j = 0; j < 9; j++){
      if ( matrix[i][j] == 0 ){
        for ( var num = 1; num <=9; num++){ 
          if( check1(matrix, i,j, num) && check2(matrix, i,j,num)){
            matrix[i][j] = num;
          }
        }
      }
    }
  }
}

function check1 (matrix, row_num, col_num, num){
  for (var i = 0; i < 9; i++) {
     if ( (num == matrix[row_num][i]) || (num == matrix[i][col_num])){
       return false;
     }
  }
  return true;
}

function check2(matrix, row_num, col_num, num){
  for ( var i=0; i < 3; i++){
    for ( var j = 0; j < 3; j++){
      if(matrix[Math.floor((row_num / 3)) * 3 + i][Math.floor((col_num / 3)) * 3 + j] == num){
        return false;
      }
    }
  }
  return true;
}

