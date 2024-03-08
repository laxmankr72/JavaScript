const accountId = 12345
let emailId = "laxmantelo2003@gmail.com"
var accountPassword = "Name@8907"
accountCity = "Ranchi"
let accountState;


console.log(accountId);
console.log(emailId);

console.table([accountId , emailId, accountPassword,accountCity]);

/*
prefer not to use var
besause of issue in block scope and functional scope
*/


emailId = "laxman123@gmail.com"
accountPassword = "N8907"
accountCity = "Dumka"

console.table([accountId , emailId, accountPassword,accountCity,accountState]);