let currentSubject = "";
let subjectsData = {}; // Optional - for dynamic topic handling

function showUnits(subject) {
  currentSubject = subject;
  document.getElementById('subjectsContainer').style.display = 'none';

  // Hide all unit containers first
  const allUnits = document.querySelectorAll('.units-container');
  allUnits.forEach(unit => unit.style.display = 'none');

  // Show the relevant unit container based on subject
  if (subject === 'Machine Learning') {
    document.getElementById('mlUnitsContainer').style.display = 'flex';
  } else if (subject === 'Compiler Design') {
    document.getElementById('cdUnitsContainer').style.display = 'flex';
  } else if (subject === 'Cryptography and Network Security') {
    document.getElementById('cnsUnitsContainer').style.display = 'flex';
  } else if (subject === 'OOAD') {
    document.getElementById('ooadUnitsContainer').style.display = 'flex';
  } else if (subject === 'MEAN Stack Development') {
    document.getElementById('meanUnitsContainer').style.display = 'flex';
  }
}

function goToUnit(unitNumber) {
  const topicContainer = document.getElementById('topicsContainer');
  topicContainer.innerHTML = ''; // Clear previous topics
  topicContainer.style.display = 'block';

  const allUnits = document.querySelectorAll('.units-container');
  allUnits.forEach(unit => unit.style.display = 'none');

  const unitKey = `Unit ${unitNumber}`;
  const topics = subjectsData[currentSubject]?.[unitKey];

  if (topics && topics.length > 0) {
    topics.forEach(topic => {
      const topicDiv = document.createElement('div');
      topicDiv.className = 'topic-item';
      topicDiv.innerText = topic;
      topicContainer.appendChild(topicDiv);
    });
  } else {
    topicContainer.innerHTML = '<p>No topics found for this unit.</p>';
  }

  // Show back to units button
  const backToUnitsBtn = document.getElementById('backToUnitsBtn');
  if (backToUnitsBtn) backToUnitsBtn.style.display = 'block';
}

function backToUnits() {
  document.getElementById('topicsContainer').style.display = 'none';

  if (currentSubject === 'Machine Learning') {
    document.getElementById('mlUnitsContainer').style.display = 'flex';
  } else if (currentSubject === 'Compiler Design') {
    document.getElementById('cdUnitsContainer').style.display = 'flex';
  } else if (currentSubject === 'Cryptography and Network Security') {
    document.getElementById('cnsUnitsContainer').style.display = 'flex';
  } else if (currentSubject === 'OOAD') {
    document.getElementById('ooadUnitsContainer').style.display = 'flex';
  } else if (currentSubject === 'MEAN Stack Development') {
    document.getElementById('meanUnitsContainer').style.display = 'flex';
  }

  const backToUnitsBtn = document.getElementById('backToUnitsBtn');
  if (backToUnitsBtn) backToUnitsBtn.style.display = 'none';
}

function backToSubjects() {
  const allUnits = document.querySelectorAll('.units-container');
  allUnits.forEach(unit => unit.style.display = 'none');

  document.getElementById('subjectsContainer').style.display = 'flex';
  const topicContainer = document.getElementById('topicsContainer');
  if (topicContainer) topicContainer.style.display = 'none';

  const backToUnitsBtn = document.getElementById('backToUnitsBtn');
  if (backToUnitsBtn) backToUnitsBtn.style.display = 'none';
}

function filterSubjects() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".subject-card");

  cards.forEach(card => {
    const title = card.textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

