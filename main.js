var ham=document.querySelector('.hamburger');
var nav=document.querySelector('nav');
var cross=document.querySelector('.cross');


// const style=getComputedStyle(nav);
// const hamStyle = getComputedStyle(ham);
// const crossStyle = getComputedStyle(cross);
// console.log(hamStyle);
// console.log(style);


ham.addEventListener("click", navopen);
cross.addEventListener("click",navclose);

function navopen(){
		nav.style.display='block';
		ham.style.display='none';
		cross.style.display='block';
}
function navclose(){
	nav.style.display='none';
	ham.style.display='block';
	cross.style.display='none';
}