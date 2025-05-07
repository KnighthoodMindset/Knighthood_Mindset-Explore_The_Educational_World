function loadTopics(subject) {
    // Replace spaces and special characters to make it a valid filename
    const formattedSubject = subject
        .replace(/&/g, 'and')
        .replace(/[^\w\s]/gi, '') // Remove special characters
        .replace(/\s+/g, '_');     // Replace spaces with underscores

    // Construct the target page URL
    const pageUrl = `${formattedSubject}.html`;

    // Navigate to the subject's page
    window.location.href = pageUrl;
}

function searchTopics() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const subjects = document.querySelectorAll('#subjectList li');

    subjects.forEach(subject => {
        const text = subject.textContent.toLowerCase();
        subject.style.display = text.includes(input) ? 'block' : 'none';
    });
}
