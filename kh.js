var txt = document.createTextNode(" This text was added to the DIV.");
var parent = document.getElementById('div');
parent.insertBefore(txt, parent.lastChild);
