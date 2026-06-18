/* =====================================================
   KYLE ADVOCATES JAVASCRIPT FILE

   This file controls:

   1. Mobile Menu
   2. Scroll Animations
   3. Consultation Form Validation
   4. Contact Form Validation

   Safe for beginners to edit.
===================================================== */


/* =====================================================
   MOBILE HAMBURGER MENU
===================================================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){

    hamburger.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

    });

}

/* =====================================================
   SCROLL ANIMATION
===================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-in").forEach((el)=>{

    observer.observe(el);

});

/* =====================================================
   CONSULTATION FORM VALIDATION

   FORM ID:
   consultationForm

   TO ADD MORE VALIDATION:
   Add more conditions below.
===================================================== */

const consultationForm =
document.getElementById("consultationForm");

if(consultationForm){

consultationForm.addEventListener("submit",function(e){

    const fullName =
    document.getElementById("fullName").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    if(
        fullName === "" ||
        email === "" ||
        phone === ""
    ){

        e.preventDefault();

        alert(
          "Please complete all required fields."
        );
    }

});

}

/* =====================================================
   CONTACT FORM VALIDATION

   FORM ID:
   contactForm
===================================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

    const name =
    document.getElementById("contactName")
    .value.trim();

    const email =
    document.getElementById("contactEmail")
    .value.trim();

    if(name === "" || email === ""){

        e.preventDefault();

        alert(
          "Please complete all required fields."
        );
    }

});

}

/* =====================================================
   FUTURE IMPROVEMENTS

   You can later add:

   - Backend integration
   - Email sending
   - Database storage
   - Appointment scheduling API
   - WhatsApp API
===================================================== */