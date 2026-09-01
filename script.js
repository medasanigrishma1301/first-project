// ===============================
// Smart Drunk Detection Vehicle Safety System
// script.js
// ===============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Reveal Animation
const revealElements = document.querySelectorAll(".card,.step,.gallery img,.tech div");

function reveal() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.7s";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Live Clock
function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

// Alcohol Detection Demo
function testAlcohol(){

    const level = (Math.random()*0.08).toFixed(3);

    const value = document.getElementById("alcoholValue");
    const status = document.getElementById("driverStatus");
    const engine = document.getElementById("engineStatus");
    const progress = document.getElementById("progressBar");

    let width = 0;

    progress.style.width="0%";

    const loading = setInterval(()=>{

        width++;

        progress.style.width=width+"%";

        if(width>=100){

            clearInterval(loading);

            value.innerHTML=level+" %BAC";

            if(level>0.03){

                status.innerHTML="🚫 Alcohol Detected";

                status.style.color="red";

                engine.innerHTML="ENGINE LOCKED";

                engine.style.color="red";

                alert("Alcohol Detected!\nVehicle Locked.");

            }else{

                status.innerHTML="✅ Safe to Drive";

                status.style.color="#2ecc71";

                engine.innerHTML="ENGINE READY";

                engine.style.color="#2ecc71";

                alert("Driver Safe.\nVehicle Started.");

            }

        }

    },20);

}

// Contact Form
const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.querySelector("input[type=text]").value;

const email=form.querySelector("input[type=email]").value;

const msg=form.querySelector("textarea").value;

if(name==""||email==""||msg==""){

alert("Please fill all fields.");

return;

}

alert("Message Sent Successfully!");

form.reset();

});

}

// FAQ Accordion
document.querySelectorAll(".faq-item h3").forEach(item=>{

item.style.cursor="pointer";

item.addEventListener("click",()=>{

const p=item.nextElementSibling;

if(p.style.display==="block"){

p.style.display="none";

}else{

p.style.display="block";

}

});

});

// Animated Counters
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerHTML="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerHTML;

const inc=target/100;

if(count<target){

counter.innerHTML=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerHTML=target;

}

}

update();

});