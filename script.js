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