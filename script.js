let input = document.querySelector("task__input");
let exportTxt = document.querySelector("taskList__list");
let saveBtn = document.querySelector("task__addBtn");

saveBtn.addEventListener("click", () => {
  let savedTxt = input.value();
  console.log(savedTxt)
})
