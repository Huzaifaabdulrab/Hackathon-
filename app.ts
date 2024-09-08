function updateResume() {
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById("contact") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    console.log("Name:", nameElement.value);
    console.log("Education:", educationElement.value);
    console.log("Skills:", skillsElement.value);
    console.log("Email:", emailElement.value);
    console.log("Address:", addressElement.value);
    console.log("Contact:", contactElement.value);

    const displayName = document.getElementById("display-name")!;
    const displayEmail = document.getElementById("display-email")!;
    const displayContact = document.getElementById("display-contact")!;
    const displayAddress = document.getElementById("display-address")!;
    const displayEducation = document.getElementById("display-education")!;
    const displaySkills = document.getElementById("display-skills")!;

    if (nameElement && emailElement && contactElement && addressElement && educationElement && skillsElement) {
        displayName.innerText = nameElement.value;
        displayEmail.innerText = emailElement.value;
        displayContact.innerText = contactElement.value;
        displayAddress.innerText = addressElement.value;
        displayEducation.innerText = educationElement.value;
        displaySkills.innerText = skillsElement.value;
    } else {
        console.error("One or more elements are missing.");
    }
}
