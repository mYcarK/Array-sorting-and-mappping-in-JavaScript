numbers=[12,89,23,45,9,76,56]
document.getElementById("p1").innerHTML=numbers
function ascending(){
    numbers.sort(function(a,b) {return a-b})
    document.getElementById("p1").innerHTML=numbers
}


function descending() {
    numbers.sort(function (a, b) { return b-a})
    document.getElementById("p1").innerHTML = numbers
}