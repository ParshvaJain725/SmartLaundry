
// For login side bar
function openLogform() {
  document.getElementById("login").style.width = "310px";
  document.getElementById("signup").style.width = "0%";
}

function closeLogform() {
  document.getElementById("login").style.width = "0%";
}

// For signup side bar
function openSignform() {
  document.getElementById("signup").style.width = "310px";
  document.getElementById("login").style.width = "0%";
}

function closeSignform() {
  document.getElementById("signup").style.width = "0%";
}

// For mobile menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// View Order
function openOrder() {
  document.getElementById("order_detail").style.width = "98vmin";
}

function closeOrder() {
  document.getElementById("order_detail").style.width = "0";
}
