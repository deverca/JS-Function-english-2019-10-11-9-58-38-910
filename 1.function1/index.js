
function reverseString(message){
    var reversedMessage='';

for(var j = message.length-1; j>=0;j--){
    reversedMessage+=message.charAt(j);
}

console.log(reversedMessage);
}
reverseString('hello'); 
