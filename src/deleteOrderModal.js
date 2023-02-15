const deleteButtonDialog = document.getElementById("delete_order");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("delete_order_dialog");
const deleteButton = document.getElementById("delete");

deleteButtonDialog.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});

deleteButton.addEventListener("click", () => {
  location.href = "https://google.com";
});

window.onclick = function (event) {
  if (event.target == dialog) {
      dialog.close();
  }
};