 // app.ts
interface ResumeData {
    name: string;
    religion:string;
    city:string;
    email: string;
    degree: string;
    institution: string;
    jobTitle: string;
    company: string;
    skills: string[];
    project:string;
    achivement:string;
}

document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const resumeData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        religion:(document.getElementById('religion') as HTMLInputElement).value,
        city:(document.getElementById('city') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        institution: (document.getElementById('institution') as HTMLInputElement).value,
        jobTitle: (document.getElementById('job-title') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(','),
        project:(document.getElementById('project') as HTMLTextAreaElement).value,
        achivement:(document.getElementById('achivement') as HTMLTextAreaElement).value,
    }

    generateResume(resumeData);
});

function generateResume(data: ResumeData) {
    const resumeSection = document.getElementById('resume') as HTMLElement;
    resumeSection.innerHTML = `
        <h3><p><strong>FullName:</strong>${data.name}</p></h3>
        <p><strong>Religion:</strong>${data.religion}</p>
        <P><strong>City:</strong>${data.city}</p>
        <p><strong>Email Address:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.degree}, ${data.institution}</p>
        <p><strong>Work Experience:</strong> ${data.jobTitle} at ${data.company}</p>
        <p><strong>Skills:</strong> ${data.skills.map(skill => skill.trim()).join(', ')}</p>
        <P><strong>Project:</strong>${data.project}<p/>
        <p><strong>Achivement:</strong>${data.achivement}</p>
    `;

    // Show the resume section
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    resumeOutput.style.display = 'block';
}
