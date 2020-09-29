var k = 0
var NameWrite

/* Delfining the function color, enable the tabs to change color to gold when called.
 I have called it in the onmouseover in HTML*/
function color(a) {
    a1 = String(a)
    A = '#tab' + a1
    var x = document.querySelector(A)
    x.style.backgroundColor = "gold"
}
/* The opposite of color(a), this function when called changes the color of the tabs back 
to their orignal color i.e. rgb(0, 195, 255). I have called it in the onmouseout in HTML   */
function decolor(b) {
    b1 = String(b)
    B = "#tab" + b1
    var y = document.querySelector(B)
    y.style.backgroundColor = "rgb(0, 195, 255)";
}
/*When called give a prompt to the user to enter his name. This will then be used to Welcome
the user using the document.write() method to write on the page*/
function Aprompt() {

    Name = window.prompt("Hi, let me know who you are")
    if (Name != null) {
        NameWrite = document.write("Hello " + Name + " !" + "  Welcome to Education Today")
        return NameWrite
    }
    else {
        NameWrite = document.write("Hello " + "Friend" + " !" + " Welcome to Education Today")
    }
}


count = 0
/*Defines what happens to the user's text when the Paste button is pressed. It includes creating 
<li> elements in the HTML Code, assigning it the text typed by the user and finally, appending it
as a child of the <ul> tag in the HTML document.*/
function Enter() {
    var json = {

    }
    var list = document.getElementById("list_of_chat")
    var text = document.getElementById("comment")
    var textString = text.value
    count++
    json[count] = textString
    x = document.createElement("li")
    x.innerHTML = textString
    list.appendChild(x)
    text.value = ""

}

