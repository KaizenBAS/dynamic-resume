function generateResume(): void {
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const contact: string = (document.getElementById('contact') as HTMLInputElement).value;
    const education: string = (document.getElementById('education') as HTMLInputElement).value;
    const skills: string = (document.getElementById('skills') as HTMLInputElement).value;
    const work: string = (document.getElementById('workExperience') as HTMLInputElement).value;


    const profilePicInput: HTMLInputElement = document.getElementById('profilePic') as HTMLInputElement;
    const file: File | null = profilePicInput.files ? profilePicInput.files[0] : null;

    if (file) {
        const imageUrl: string = URL.createObjectURL(file); 
        const profileImage: HTMLImageElement = document.getElementById('profileImagePreview') as HTMLImageElement;
        profileImage.src = imageUrl;
        profileImage.style.display = 'block'; 
    }



    const resumeContent: string = `
    <h3 style="margin-bottom: 10px;">${name}</h3>
    <p style="margin-bottom: 20px;"><strong>Contact:</strong> ${contact}</p>
    <h4 style="margin-top: 20px; margin-bottom: 5px;">Education:</h4>
    <p style="margin-bottom: 20px;">${education}</p>
    <h4 style="margin-top: 20px; margin-bottom: 5px;">Skills:</h4>
    <p style="margin-bottom: 20px;">${skills}</p>
    <h4 style="margin-top: 20px; margin-bottom: 5px;">Work Experience:</h4>
    <p>${work}</p>
`;

    const resumeContainer: HTMLElement = document.getElementById('resumeContent') as HTMLElement;
    resumeContainer.innerHTML = resumeContent;
}
