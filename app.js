var value = prompt("Enter Your Value")
var str = value.toLowerCase()
var len = str.length
var massege = "It Is A Palindrome"

for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
        massege = "It Is Not Palindrome"
    }

}
console.log(value + ": " + massege)


