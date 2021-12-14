document.getElementById("login").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    // const email=document.getElementById("email").value
    // const password = document.getElementById("password").value
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .catch((error)=>{
    //     document.getElementById("error").innerHTML=error.message
        
    alert("Login Sucessful");
    location.href="/welcome.html";
    
}

function signUp(){
    // const email=document.getElementById("email").value
    // const password = document.getElementById("password").value
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .catch((error)=>{
    //     document.getElementById("error").innerHTML=error.message
    // });
    alert("Login Sucessful");
    location.href="/welcome.html";
}

function forgetPass(){
    const email=document.getElementById("email").value
    firebase.auth().signInWithEmailAndPassword(email)
    .then(()=>{
        alert("Reset link send to your email id")
    })
    .catch((error)=>{
        document.getElementById("error").innerHTML=error.message
    });
}
