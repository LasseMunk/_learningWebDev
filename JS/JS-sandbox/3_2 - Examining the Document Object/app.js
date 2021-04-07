let val;

val = document;
// collection of elements in the document
// as array - so can be looked up as aray
val = document.all;
// 2nd element > head tag
val = document.all[1];
// array properties - how many elements in DOM
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
// the address
val = document.domain;
// everything, both addres, port and page
val = document.URL;
val = document.characterSet;
// this is a html/text
val = document.contentType;

val = document.forms;
// this page has 1 form.
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
// if the form has a action="..." then it return ..
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
// a string of all classes
val = document.links[0].className;
// collection of classes as object (DOM TOKEN LIST)
val = document.links[0].classList;
// Specific class
val = document.links[0].classList[0];

val = document.images;


val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

// because collections is not an array.
// So we can not use forEach out of the box
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  // loops through each script and returns each
  // sources
  console.log(script.getAttribute('src'));
});

console.log(val);