//https://www.npmjs.com/package/jsonwebtoken > jwt의 공식문서. 사용법확인.

const jwt = require("jsonwebtoken");
const secretKey = "Jason" // token 발행을 위한 secret Key; 원하는걸로 하면됨.

const token = jwt.sign({ test: true}, secretKey); // Token을 위한 
// console.log(token);

const decodedToken = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2Mzc1NjYzMjd9.ad-bxuh60Evd27utCwHWSijCL_YnaEPXn0Zx3M-UeJk");
// const verification = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2Mzc1NjYzMjd9.ad-bxuh60Evd27utCwHWSijCL_YnaEPXn0Zx3M-UeJk", secretKey);

console.log(decodedToken)
// console.log(verification)


//decodedToken과 verification의 결과 차이를 아는것이 매우 중요하다.
//복호화는 secretKey가 없어도 가능하지만, 유효성 검증은 키가 있어야한다.
//JWT의 주요한 특징중 하나 > 복호화는 어디서든 가능하지만, 유효성검사는 서버에서만 할 수 있다.
//따라서 서버에서 유효성 검사 후 토큰이 변질됨을 확인해서 err를 throw함으로써 다양한 처리가 가능하다.