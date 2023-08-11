const noteInput = document.getElementById('note');
const saveButton = document.getElementById('saveButton');
const noteList = document.querySelector('.noteList');

saveButton.addEventListener('click', () => {
  const textValue = noteInput.value;

  if (textValue.trim() !== '') {
    const newNote = document.createElement('li');
    newNote.setAttribute('class', 'newNotes');
    newNote.textContent = textValue;
    noteList.appendChild(newNote);

    noteInput.value = '';

    newNote.addEventListener('click', () => {
      newNote.style.textDecoration = 'line-through';
    });
  }
});
