function palindrome(message){

    for(var i=0;i<message.length;i++){
        if(!(message.charAt(i)== message.charAt(message.length-1-i))){
            return false;
        }else{
            return true;
        }
    }

  }
palindrome('hello'); // should return false
palindrome('abcba'); // should return true