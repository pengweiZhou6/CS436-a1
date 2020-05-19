let myArr = ["bacon","lecture436","tomatoes"];
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
             '<button id="' + m + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>' + '<p class="line">' + m + '</p>' ;
        document.getElementById("demo").appendChild(badge);
        console.log(m);
    }
    console.log("initial");
}
function deleteText(t) {
    for( let i = 0; i < msg.length; i++){
        console.log(myArr[i]);
        if ( myArr[i] === t) {
            myArr.splice(i, 1);
            document.getElementById("demo").innerHTML = "";
        }
    }
    msg = JSON.stringify(myArr);
    content = JSON.parse(msg);
    for (let m of content)
    {
        let badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML =
            '<button id="' + m + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>' + '<p class="line">' + m + '</p>' ;
        document.getElementById("demo").appendChild(badge);
        console.log(m);
    }
}

function addText(t) {
    document.getElementById("text").value = "";
    if(t.length === 0){
        return;
    }
    myArr.push(t);
    msg = JSON.stringify(myArr);
    content = JSON.parse(msg);
    let badge = document.createElement('div');
    badge.innerHTML =
        '<button id="' + t + '" class= "delete" onclick="deleteText(this.id)" style="float: right;">X</button>' + '<p class="line">' + t + '</p>' ;
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