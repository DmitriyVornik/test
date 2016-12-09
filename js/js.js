function testPassAndLog(password,login){
    
    if((/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password))=== false && ((/^[a-z]{4,12}$/.test(login))===false))
        document.getElementById("incor").innerHTML = "Password  and Login incorrect <br>";
    else if((/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password))=== false || ((/^[a-z]{4,12}$/.test(login))===false))
        document.getElementById("incor").innerHTML = "Password  or Login incorrect <br>";
    
    else 
        
        return document.getElementById("0").innerHTML = "Логин: " +login+ "<br>" + "Пароль: " + password;
    
}

function genPass(){
    var gPass = PassGenJS.getPassword({
    letters: 2,          // Количество букв
    numbers: 1,          // Количество цифр
    lettersUpper: 5     // Количество букв в верхнем регистре
        
    
});   
 document.getElementById("password").value = gPass;   
}


