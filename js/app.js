/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll(".your-active-class");
let topBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((element,ind) => {
    let sectionName = element.getAttribute("data-nav");
    let SectionBar = document.createElement("li");
	let topofSection = element.offsetTop;
    SectionBar.setAttribute("class", "menu__hero" + ind);
    SectionBar.innerHTML = `<a onClick= "scrollToSection(${topofSection})">${sectionName}</a>`;
    topBar.appendChild(SectionBar);
});

function scrollToSection (anchor) {
    window.scrollTo(0,anchor);
}


// Add class 'active' to section when near top of viewport
let newPosition = 0;
document.addEventListener("scroll", () => {
	
	newPosition = this.scrollY;
	sectionPosition = [];
	sections.forEach(element => {
	let IsInViewPort = element.getBoundingClientRect().top;
	sectionPosition.push(IsInViewPort);
});

// Set sections as active
findIndex = sectionPosition.findIndex(element => element > 0);
	for (let i = 0 ; i < sections.length ; i++)
	{
		if (findIndex === i)
		{
			document.querySelector(".menu__hero" + findIndex).classList.add("active");
		}
		else
		{
			document.querySelector(".menu__hero" + i).classList.remove("active");
		}
	}
});





