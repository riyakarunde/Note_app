const notesContainer = document.getElementById("notes-container");
const addBtn = document.getElementById("add-note");

addBtn.onclick = () => notesContainer.insertBefore(createNote(), addBtn);

function createNote() {
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `<textarea placeholder="Empty Note"></textarea>
    <div class="controls">
      <button data-action="text">B/W</button>
      <button data-action="bold">B</button>
      <button data-action="italic">I</button>
    </div>
    <input type="color" class="color-picker">`;

  const textarea = note.querySelector("textarea");

  /* control handler */
  note.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    if (action === "text")
      textarea.style.color =
        textarea.style.color === "white" ? "black" : "white";

    if (action === "bold")
      textarea.style.fontWeight =
        textarea.style.fontWeight === "bold" ? "normal" : "bold";

    if (action === "italic")
      textarea.style.fontStyle =
        textarea.style.fontStyle === "italic" ? "normal" : "italic";
  });

  /* bg  color of text box */
  note.querySelector(".color-picker").oninput = e =>
  note.style.background = e.target.value;

  /* for delete the note */
  note.ondblclick = () =>
    confirm("Delete this note?") && note.remove();

  return note;
}
