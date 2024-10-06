// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {  // If scrolled down 100px or more
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

// Owl Carousel initialization
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        stagePadding: 80,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 3,
                margin: 5,
                stagePadding: 90
            }
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 70; // Adjust this value to match the height of your fixed nav

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

//Print data in console
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Print data to console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting (you can remove this in production)

    // Show the toast notification
    showToast();

    // Clear the form (optional)
    document.getElementById('contact-form').reset();

    // You can also add your code here to send the form data
});

function showToast() {
    // Get the toast element
    const toast = document.getElementById('toast');

    // Add the "show" class to display the toast
    toast.className = "toast show";

    // After 3 seconds, remove the show class to hide the toast
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000); // 3 seconds duration
}

document.addEventListener('DOMContentLoaded', function() {
    // Select the right section
    var rightSection = document.querySelector('.right-section');

    // Remove the top margin
    rightSection.style.marginTop = '0px'; // Set to any value you prefer
});

// Setup modal
const modal = document.getElementById("addSkillModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const submitSkillBtn = document.getElementById("submitSkillBtn");

// Open modal when 'ADD SKILL' button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "flex"; // Use flex to enable centering
    document.body.classList.add("modal-open"); // Disable page scroll
}

// Close modal when 'CANCEL' button is clicked
closeModalBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Re-enable page scroll
}

// Add new skill when 'ADD SKILL' button in modal is clicked
submitSkillBtn.onclick = function() {
    // Get input values
    const domain = document.getElementById("domain").value;
    const skillNames = document.querySelectorAll(".skill-name");
    const proficiencies = document.querySelectorAll(".skill-proficiency");

    // Create a new skill box and add it to the skills container
    const skillsContainer = document.querySelector(".skills-container");

    if (domain) {
        const newSkillBox = document.createElement("div");
        newSkillBox.classList.add("skill-box");

        let skillsHTML = `<h3>${domain}</h3>`;

        // Loop through skill inputs
        for (let i = 0; i < skillNames.length; i++) {
            const skillName = skillNames[i].value;
            const proficiency = proficiencies[i].value;

            if (skillName && proficiency) {
                skillsHTML += `
                    <div class="skill">
                        <p>${skillName} <span>${proficiency}%</span></p>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${proficiency}%;"></div>
                        </div>
                    </div>
                `;
            }
        }

        newSkillBox.innerHTML = skillsHTML;
        skillsContainer.appendChild(newSkillBox);

        // Reset the input fields
        document.getElementById("domain").value = "";
        skillNames.forEach(input => input.value = "");
        proficiencies.forEach(input => input.value = "");

        // Close the modal
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable page scroll
    } else {
        alert("Please fill in all fields.");
    }
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable page scroll
    }
}

// Optional: Close the modal with the "Escape" key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable page scroll
    }
}
