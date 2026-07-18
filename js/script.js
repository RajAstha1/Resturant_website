// ======================================
// Royal Feast Restaurant
// script.js
// ======================================

// ==========================
// Welcome Popup (Home Page Only)
// ==========================

window.addEventListener("load", function () {

    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html" || currentPage === "") {

        setTimeout(function () {

            alert("🍽 Welcome to Royal Feast Restaurant!\nEnjoy delicious food and a wonderful dining experience.");

        }, 500);

    }

});

// ==========================
// Sticky Navbar
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.transition = "0.3s";

    } else {

        navbar.style.background = "rgba(0,0,0,0.65)";

    }

});

// ==========================
// Active Navigation
// ==========================

const page = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.classList.remove("active");

    if (
        link.getAttribute("href") === page ||
        (page === "" && link.getAttribute("href") === "index.html")
    ) {

        link.classList.add("active");

    }

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill all required fields.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("✅ Thank you!\n\nYour message has been sent successfully.");

form.reset();

});

}

// ==========================
// Scroll To Top Button
// ==========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#FFD700";
topButton.style.color="black";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 5px 10px rgba(0,0,0,0.4)";
topButton.style.zIndex="999";
topButton.style.transition="0.3s";

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// Fade-In Animation
// ==========================

const animatedElements=document.querySelectorAll(

".feature-card,.dish-card,.info-card,.service-card,.menu-card,.chef-section,.about,.testimonial,.stat-box"

);

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{

threshold:0.2

});

animatedElements.forEach(function(element){

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="all 0.8s ease";

observer.observe(element);

});

// ==========================
// Footer Year
// ==========================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

// ==========================
// Order Button
// ==========================

const orderButtons=document.querySelectorAll(".menu-card button");

orderButtons.forEach(function(button){

button.addEventListener("click",function(){

const item=this.parentElement.querySelector("h3").textContent;

alert("🍴 You selected: " + item + "\n\nOnline ordering will be available soon!");

});

});

// ==========================
// Hover Effect
// ==========================

const cards=document.querySelectorAll(".menu-card,.service-card,.feature-card,.info-card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.boxShadow="0 15px 30px rgba(255,215,0,0.3)";

});

card.addEventListener("mouseleave",function(){

this.style.boxShadow="0 10px 20px rgba(0,0,0,0.4)";

});

});

// ==========================
// Console Message
// ==========================

console.log("====================================");
console.log("Royal Feast Restaurant Website");
console.log("Developed using HTML, CSS & JavaScript");
console.log("====================================");