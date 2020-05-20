let myArr = [{ name: "Oliver", msg: "I like Anime" },{ name: "Linn", msg: "I drink Soda" },{ name: "Jason", msg: "I Play Game" }];
let msg = JSON.stringify(myArr);
let content = JSON.parse(msg);
function initial() {
    document.getElementById("demo").style.visibility  = "hidden";
    document.getElementById('hide').style.backgroundColor = "green";
    for (let m of content)
    {
        let badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML =
             '<button id="' + m.name + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>' + '<p class="line">'
            + '<div class="name">'+m.name+'</div>'+": "
            + '<div class="msg">' + m.msg +'</div>'+ '</p>' ;
        document.getElementById("demo").appendChild(badge);
        console.log(m);
    }
    console.log("initial");
}
function deleteText(t) {
    for( let i = 0; i < msg.length; i++){
        console.log("myArr[i].name");
        console.log(myArr[i].name);
        if ( myArr[i].name === t) {
            console.log("Found");
            myArr.splice(i, 1);
            document.getElementById("demo").innerHTML = "";
            i = msg.length;
        }
    }
    msg = JSON.stringify(myArr);
    content = JSON.parse(msg);
    for (let m of content)
    {
        let badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML =
            '<button id="' + m.name + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>' + '<p class="line">'
            + '<div class="name">'+m.name+'</div>'+": "
            + '<div class="msg">' + m.msg +'</div>'+ '</p>' ;
        document.getElementById("demo").appendChild(badge);
        console.log(m);
    }
}

function addText(u,t) {
    document.getElementById("text").value = "";
    document.getElementById("user").value = "";
    if(t.length === 0 || u.length===0){
        alert("user name or msg cannot be empty!")
    }
    myArr.push({
        name: u,
        msg: t
    });
    msg = JSON.stringify(myArr);
    content = JSON.parse(msg);
    let badge = document.createElement('div');
    badge.innerHTML =
        '<button id="' + u + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>'  + '<p class="line">'
        + '<div class="name">'+ u +'</div>'+": "
        + '<div class="msg">' + t +'</div>'+ '</p>' ;
    document.getElementById("demo").appendChild(badge);
}

function showList() {
    document.getElementById("demo").style.visibility  = "visible";
    document.getElementById('show').style.backgroundColor = "green";
    document.getElementById('hide').style.backgroundColor = "white";
}
function hideList() {
    document.getElementById("demo").style.visibility  = "hidden";
    document.getElementById('hide').style.backgroundColor = "green";
    document.getElementById('show').style.backgroundColor = "white";
}
function clearList() {
    document.getElementById("demo").innerHTML = "";
}