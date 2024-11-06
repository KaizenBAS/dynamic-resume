function generateResume() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var work = document.getElementById('workExperience').value;
    var profilePicInput = document.getElementById('profilePic');
    var file = profilePicInput.files ? profilePicInput.files[0] : null;
    if (file) {
        var imageUrl = URL.createObjectURL(file);
        var profileImage = document.getElementById('profileImagePreview');
        profileImage.src = imageUrl;
        profileImage.style.display = 'block';
    }
    var resumeContent = "\n    <h3 style=\"margin-bottom: 10px;\">".concat(name, "</h3>\n    <p style=\"margin-bottom: 20px;\"><strong>Contact:</strong> ").concat(contact, "</p>\n    <h4 style=\"margin-top: 20px; margin-bottom: 5px;\">Education:</h4>\n    <p style=\"margin-bottom: 20px;\">").concat(education, "</p>\n    <h4 style=\"margin-top: 20px; margin-bottom: 5px;\">Skills:</h4>\n    <p style=\"margin-bottom: 20px;\">").concat(skills, "</p>\n    <h4 style=\"margin-top: 20px; margin-bottom: 5px;\">Work Experience:</h4>\n    <p>").concat(work, "</p>\n");
    var resumeContainer = document.getElementById('resumeContent');
    resumeContainer.innerHTML = resumeContent;
}
