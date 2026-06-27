const roles = [
    "DevOps Engineer",
    "AWS Cloud Enthusiast",
    "Linux Automation Learner",
    "CI/CD Builder"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(type, deleting ? 40 : 100);

}

type();
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}