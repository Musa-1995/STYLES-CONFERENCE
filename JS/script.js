
document.getElementById("myform").onsubmit = recheck;


function recheck(e){
    e.preventDefault();
    var fullName;
    var email;
    var pass;
    var message;

    fullName = document.getElementById("name");
    email = document.getElementById("email");
    pass = document.getElementById("passes");
    message = document.getElementById("comment");

    let name = fullName.value;
    let mail = email.value;
    let p = pass.value;
    let c = message.value;

    console.log(name,mail,p,c);
    alert("Your form have submitted");
}
