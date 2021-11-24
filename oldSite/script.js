document.body.onscroll = () => {
	const op = document.documentElement.scrollTop
		? "add"
		: "remove";
	document.body.classList[op]("scroll");
};

document.body.onscroll();
