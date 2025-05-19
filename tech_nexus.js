  // Filter function to hide/show subjects based on search input
  function filterSubjects() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const subjects = document.querySelectorAll('.subject-card');
    subjects.forEach(subject => {
      const text = subject.textContent.toLowerCase();
      subject.style.display = text.includes(input) ? 'block' : 'none';
    });
  }

  // Open topic page directly on subject click
  function openTopic(page) {
    window.location.href = page;
  }

