
function apple(){
    var apple = document.getElementById("apple")
var b = apple.value 
var c = b.toUpperCase()
    if(c.charAt(0)!=="A"||c.charAt(1)!=="P"||c.charAt(2)!=="P"||c.charAt(3)!=="L"||c.charAt(4)!=="E"){
        alert("Beta dobara try kro")
    } else {
        alert("Shabash beta") 
    }

}
function ant(){
    var ant = document.getElementById("ant")
var d = ant.value 
var e = d.toUpperCase()
    if(e.charAt(0)!=="A"||e.charAt(1)!=="N"||e.charAt(2)!=="T"){
        alert("Beta dobara try kro")
    } else {
        alert("Shabash beta") 
    }

}



function banana(){
    var banana = document.getElementById("banana")
var f = banana.value 
var g = f.toUpperCase()
    if(g.charAt(0)!=="B"||g.charAt(1)!=="A"||g.charAt(2)!=="N"||g.charAt(3)!=="A"||g.charAt(4)!=="N"||g.charAt(5)!== "A") {
        alert("Beta dobara try kro")
    } else {
        alert("Shabash beta") 
    }

}



function butterfly(){
    var butterfly = document.getElementById("butterfly")
var h = butterfly.value 
var i = h.toUpperCase()
    if(i.charAt(0)!=="B"||i.charAt(1)!=="U"||i.charAt(2)!=="T"||i.charAt(3)!=="T"||i.charAt(4)!=="E" ||i.charAt(5)!=="R" ||i.charAt(6)!=="F"||i.charAt(7)!=="L" ||i.charAt(8)!=="Y") {
        alert("Beta dobara try kro")
    } else {
        alert("Shabash beta") 
    }

}





function consonant () {
    
var word = prompt("Enter word or sentence")
 
                
    alert (word.replace(/[aeiouAEIOu]/g, "") )

}