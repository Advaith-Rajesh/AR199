const body = document.querySelectorAll("body")[0];
const blocks = document.querySelectorAll("main div");

body.onscroll = function(){
	blocks.forEach( block => {
		if (document.documentElement.scrollTop >= block.offsetTop - 0.66 * window.screen.height && document.documentElement.scrollTop !== 0) {
			block.className = "show";
		} else {
			block.className = "";
		}
	});
}
var isToggled = true;
  
toggleSeeData = function () {
  var seeMore = document.getElementById("seeMore")
  if (seeMore.innerHTML==="See more") {
   seeMore.innerHTML="See less"
 } else {
   seeMore.innerHTML="See more"
 }
  
}