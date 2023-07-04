import FastClick from "./fastclick";
// 移动端 fongSize设置 375款
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px";
window.addEventListener("load", function () {
	FastClick.attach(window.body || document.body);
}, false);
document.documentElement.addEventListener("touchmove", function(e) {
	if (e.touches.length > 1) {
		e.preventDefault();
	}
}, false);