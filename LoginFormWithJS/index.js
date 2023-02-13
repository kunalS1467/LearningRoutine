function submitForm(){
    var name=document.myform.name.value;  
     var password=document.myform.password.value;  
    if(name.length<6)
    {
        alert("Username Can't less than 6");
        return false;
    }
    if(password.length<8)
    {
        alert("password Can't less than 8");
        return false;
        
    }
    document.write("Welcome ! "+ name);
    
}