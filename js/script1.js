function validateform(){  
var fname=document.myform.fname.value; 
var lname=document.myform.lname.value;
var password=document.myform.password.value;  
  
if (fname==null || fname==""){  
  alert("First name can't be blank");  
  return false; 
}