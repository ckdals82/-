let fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().trim();
// console.log(input);
switch (input) {
  case 'A+':
    console.log('4.3');
    break;
  case 'A0':
    console.log('4.0');
    break;
  case 'A-':
    console.log('3.7');
    break;
  case 'B+':
    console.log('3.3');
    break;
  case 'B0':
    console.log('3.0');
    break;
  case 'B-':
    console.log('2.7');
    break;
  case 'C+':
    console.log('2.3');
    break;
  case 'C0':
    console.log('2.0');
    break;
  case 'C-':
    console.log('1.7');
    break;
  case 'D+':
    console.log('1.3');
    break;
  case 'D0':
    console.log('1.0');
    break;
  case 'D-':
    console.log('0.7');
    break;
  case 'F':
    console.log('0.0');
    break;
}

//switch case 에서 default는 case들이 없는경이 예외 경우들을 default문으로 출력.
