function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeContent;
    resumeOutput.style.display = 'block';
}
