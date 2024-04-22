// Load tasks from local storage
document.addEventListener("DOMContentLoaded", function () {
  var savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    document.getElementById("myUL").innerHTML = savedTasks;
    attachCloseEvents(); // Re-attach close events to the loaded tasks
  }
});

// Save tasks to local storage
function saveTasks() {
  var tasks = document.getElementById("myUL").innerHTML;
  localStorage.setItem("tasks", tasks);
}

// Clear all completed tasks
function clearCompleted() {
  var completedItems = document.querySelectorAll(".checked");
  completedItems.forEach(function (item) {
    item.remove();
  });
  saveTasks(); // Save updated tasks to local storage
}

// Remove all tasks
function removeAll() {
  var list = document.getElementById("myUL");
  list.innerHTML = "";
  saveTasks(); // Save updated tasks to local storage
}

// Add new task
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  saveTasks(); // Save updated tasks to local storage

  var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
   var icon = document.createElement("i");
   icon.className = "fa fa-trash";
  span.className = "close";
  // span.appendChild(txt);
  span.appendChild(icon);
  li.appendChild(span);

  attachCloseEvents(); // Attach close event to the new task
}

// Attach close event to all close buttons
function attachCloseEvents() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      saveTasks(); // Save updated tasks to local storage
    };
  }
}

// Toggle 'checked' class on list item when clicked
document.getElementById("myUL").addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
    saveTasks(); // Save updated tasks to local storage
  }
});
