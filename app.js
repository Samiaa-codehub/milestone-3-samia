var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var resumeData = {
        name: document.getElementById('name').value,
        religion: document.getElementById('religion').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
        degree: document.getElementById('degree').value,
        institution: document.getElementById('institution').value,
        jobTitle: document.getElementById('job-title').value,
        company: document.getElementById('company').value,
        skills: document.getElementById('skills').value.split(','),
        project: document.getElementById('project').value,
        achivement: document.getElementById('achivement').value,
    };
    generateResume(resumeData);
});
function generateResume(data) {
    var resumeSection = document.getElementById('resume');
    resumeSection.innerHTML = "\n        <h3><p><strong>FullName:</strong>".concat(data.name, "</p></h3>\n        <p><strong>Religion:</strong>").concat(data.religion, "</p>\n        <P><strong>City:</strong>").concat(data.city, "</p>\n        <p><strong>Email Address:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.degree, ", ").concat(data.institution, "</p>\n        <p><strong>Work Experience:</strong> ").concat(data.jobTitle, " at ").concat(data.company, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills.map(function (skill) { return skill.trim(); }).join(', '), "</p>\n        <P><strong>Project:</strong>").concat(data.project, "<p/>\n        <p><strong>Achivement:</strong>").concat(data.achivement, "</p>\n    ");
    // Show the resume section
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.style.display = 'block';
}
