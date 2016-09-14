var str = "<div>";
for(var i = 0; i < localStorage.length; i++) {
    var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log("obj");
}