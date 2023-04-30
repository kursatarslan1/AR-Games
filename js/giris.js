

var objPeople = [
    {
        username : "empty1",
        password : "temp"
    },
    {
        username : "empty2",
        password : "temp"
    }
]


function getInfo(){
    var username = document.getElementById("username").value 
    var password = document.getElementById("password").value
    var path = window.location.href.split("#")[1]

    for(i = 0; i < objPeople.length; i++){  
        if(username == objPeople[i].username && password == objPeople[i].password){
            if(path == undefined){
                window.location.href = "senaryo.html"
                return
            }    
            else{
                console.log(username + " is logged in!!")
                window.location.href = "senaryo.html#" + path 
                return
            }        
        }
    }
    console.log("incorrect password or username")
    alert("Incorrect username or password!")
}



