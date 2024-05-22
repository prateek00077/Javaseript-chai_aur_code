const userId="123"; //const keyword is used for constants whose value cannot be changed
let userEmail="prateek@gmail.com";
var name="prateek";
cityName="jodhpur";
let address;//let is more preferrable for initializing a variable

/*
1.We should not use the var keyword as it is not scope friendly
2.If you want to print all the information in a tabulated manner then use console.table and write under the []
 */

console.log(userId);
console.table([userId,userEmail,name,cityName,address]);