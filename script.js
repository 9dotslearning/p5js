document.getElementById('tst').style.color = 'red';
let tst = document.getElementById('tst').innerHTML;
console.log('tst: ' + tst);

function tstclick() {
  alert('got here!');
}

let testcode = "data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3Efoo%3C/body%3E%3C/html%3E";

let mycode  = document.getElementById('mycode').innerHTML;
console.log(mycode);

// var html = document.getElementById("html").innerHTML;
// var dataURI = 'data:text/html,' + encodeURIComponent(html);

// from http://jsfiddle.net/TCnG4/
// let dataURI = 'data:text/html;charset=utf-8,' + encodeURIComponent(mycode);
/*
let dataURI = testcode;
let converted = encodeURIComponent(mycode);
console.log('converted: ' + converted);
let first = document.getElementById('01_first');
first.setAttribute('data-sketch-src', dataURI);
console.log('dataUri: ' + dataURI);
*/
