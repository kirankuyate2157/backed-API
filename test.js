// Get all edit buttons and add event listener to each one
const editBtns = document.querySelectorAll(".edit-btn");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the row to edit and its cells
    const row = btn.closest("tr");
    const cells = row.cells;

    // Replace each cell with an input field containing the existing value
    for (let i = 1; i < cells.length - 1; i++) {
      // Skip ID and Actions columns
      const value = cells[i].innerText;
      cells[i].innerHTML = `<input type="text" value="${value}" />`;
    }

    // Change the button text to "Save" and add a class to indicate editing mode
    btn.textContent = "Save";
    btn.classList.add("save-btn");
  });
});

// Get all save buttons and add event listener to each one
const saveBtns = document.querySelectorAll(".save-btn");
saveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the row to save and its cells
    const row = btn.closest("tr");
    const cells = row.cells;

    // Update the user data with the input field values
    const updatedUser = {
      id: cells[0].innerText,
      firstName: cells[1].querySelector("input").value,
      lastName: cells[2].querySelector("input").value,
      companyName: cells[3].querySelector("input").value,
      email: cells[4].querySelector("input").value,
      password: cells[5].querySelector("input").value,
    };

    // Replace each input field with the updated value
    for (let i = 1; i < cells.length - 1; i++) {
      // Skip ID and Actions columns
      const value = updatedUser[Object.keys(updatedUser)[i - 1]];
      cells[i].innerHTML = value;
    }

    // Change the button text back to "Edit" and remove the editing mode class
    btn.textContent = "Edit";
    btn.classList.remove("save-btn");
  });
});
