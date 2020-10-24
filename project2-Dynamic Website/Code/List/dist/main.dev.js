"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//container of the tasks we going to add it
var container = document.querySelector(".container"); //the tasks we write it in the input text area

var inputTask = document.querySelector(".input"); //button add (+)

var add = document.querySelector(".add"); //creat a empty array for todos tasks if its empty (if it is saved before bring it from local storage)

if (window.localStorage.getItem("todos") == undefined) {
  var todos = []; //converted into a string

  window.localStorage.setItem("todos", JSON.stringify(todos));
} //converted into a object 


var Local = window.localStorage.getItem("todos");
var todos = JSON.parse(Local);

var item =
/*#__PURE__*/
function () {
  function item(name) {
    _classCallCheck(this, item);

    this.createItem(name);
  }

  _createClass(item, [{
    key: "createItem",
    value: function createItem(name) {
      var _this = this;

      //create a box upon add button press
      var itemBox = document.createElement("div");
      itemBox.classList.add("item"); //return the content of the object

      var input = document.createElement("input");
      input.type = "text"; //input.disabled will use it for editting inputs

      input.disabled = true;
      input.value = name;
      input.classList.add("item_input"); //create edit button

      var edit = document.createElement("button");
      edit.classList.add("edit");
      edit.innerHTML = "EDIT"; //when click on edit button go to edit function

      edit.addEventListener("click", function () {
        return _this.edit(input, name);
      }); //create remove button

      var remove = document.createElement("button");
      remove.classList.add("remove");
      remove.innerHTML = "REMOVE"; //when click on edit button go to remove function

      remove.addEventListener("click", function () {
        return _this.remove(itemBox, name);
      }); //to create a new task which append to the previous tasks

      container.appendChild(itemBox);
      itemBox.appendChild(input);
      itemBox.appendChild(edit);
      itemBox.appendChild(remove);
    } //button works when click edit button

  }, {
    key: "edit",
    value: function edit(input, name) {
      if (input.disabled == true) {
        input.disabled = !input.disabled;
      } else {
        input.disabled = !input.disabled;
        var indexof = todos.indexOf(name);
        todos[indexof] = input.value;
        window.localStorage.setItem("todos", JSON.stringify(todos));
      }
    } //button works when click remove button

  }, {
    key: "remove",
    value: function remove(itemBox, name) {
      itemBox.parentNode.removeChild(itemBox);
      var index = todos.indexOf(name);
      todos.splice(index, 1);
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }]);

  return item;
}(); //when click addbutton go to check funtion


add.addEventListener("click", check); //add with enter button and go to check function

window.addEventListener("keydown", function (e) {
  if (e.which == 13) {
    check();
  }
}); //add tasks and check if there is no input appear the alert

function check() {
  if (inputTask.value != "") {
    new item(inputTask.value);
    todos.push(inputTask.value);
    inputTask.value = "";
  } else {
    var x = document.getElementById("alert");
    x.style.display = "block";
  }
} //save data to local srorage


function saveToLocal() {
  window.localStorage.setItem("todos", JSON.stringify(todos));
} //clear data from local storage


function clearLocal() {
  window.localStorage.clear();
  window.location.reload();
} //save all tasks in todos array, and create a new object instance from class item


for (var v = 0; v < todos.length; v++) {
  new item(todos[v]);
} //on mouse over (style input tasks: with border)


function addButton(textArea) {
  textArea.style.border = "3px solid #5CA4A9";
} //on mouse out (style input tasks: without border)


function Button(textArea) {
  textArea.style.border = "none";
} //apply dark mode style


function darkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} //to disappear the alert when click add but there is no input


function hideAlert() {
  var y = document.getElementById("alert");
  y.style.display = "none";
} //to let user select the font family


function changeFont(fontName) {
  document.body.style.fontFamily = fontName;
} //toggle the drop list of fonts


function font() {
  var x = document.getElementById("dropdownContent");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}