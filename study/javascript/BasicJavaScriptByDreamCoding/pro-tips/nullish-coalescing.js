// Nullish coalescing operator
// leftExpr ?? rightExpr -------> leftExpr이 null, undefined이면 rightExpr 실행

// ❌ Bad Code 💩
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display 😜';
    }
    console.log(message);
}
  
// ✅ Good Code ✨
function printMessage(text) {
    const message = text ?? 'Nothing to display 😜';
    console.log(message);
}
  
// 🚨 Default parameter is only for undefined
function printMessage(text = 'Nothing to display 😜') {
    console.log(text);
}
  
// 🚨 Logical OR operator ||
// LeftExpr || rightExpr  --------------> leftExpr가 falsy인 경우 rightExpr 실행
// falsy : false, NaN, 0, -0, undefined, null, "", '', ``
function printMessage(text) {
    const message = text || 'Nothing to display 😜';
    console.log(message);
}
  
const result = getInitialState() ?? fetchFromServer();
console.log(result);
  
function getInitialState() {
    return null;
}
function fetchFromServer() {
    return 'Hiya from 💻';
}
  
printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');
