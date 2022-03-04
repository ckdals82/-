var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month + '-' + day;

console.log(dateString);

// 날짜 추출 함수를 사용할때 주의해야 할 점은 getMonth() 함수인데,
// getMonth() 함수는 0~11을 반환하기 때문에 항상 +1을 해줘야한다.
// 그리고 getMonth(), getDate() 함수는 수치 값을 반환하기 때문에 2자리를 맞추기 위해서는
// "0"을 붙여서 뒤에서 2자리만 잘라서 값을 변환해야 한다.
