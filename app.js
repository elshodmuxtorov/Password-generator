const passwordBox=document.getElementById("password");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvqxyz";
const number="0123456789";
const symbol="@#$%^&*()_+~|{}[]></-=";

const allCharacters=upperCase+lowerCase+number+symbol;
function createPassword(){
    let passsword="";
    passsword+=upperCase[Math.floor(Math.random()*upperCase.length)]
    passsword+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    passsword+=number[Math.floor(Math.random()*number.length)]
    passsword+=symbol[Math.floor(Math.random()*symbol.length)]

    while(length>passsword.length){
        passsword+=allCharacters[Math.floor(Math.random()*allCharacters.length)]
    }
    passwordBox.value=passsword;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}