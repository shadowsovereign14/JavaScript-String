// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
var upperCaseName = name.toUpperCase()
console.log(upperCaseName)
// TODO write your code here...

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
sentence = sentence.split(" ")
for(let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substring(1);
}
console.log(sentence.join(" "))

//TODO write your code here...


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substring(1));
//TODO write your code here...
