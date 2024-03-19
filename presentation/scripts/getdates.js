// Declare formatting for last modified date
const modDateFormat = {day:'numeric', month: 'numeric', year: 'numeric'};

// Display last modified date
document.querySelector('#lastModified').textContent = `Last modified: ${new Date(document.lastModified).toLocaleDateString('ja-JP', modDateFormat)}`;