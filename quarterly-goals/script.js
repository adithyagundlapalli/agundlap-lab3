// Function to edit the title on click of the pencil icon
document.querySelector(".pencil-icon").addEventListener("click", () => {
  const newTitle = prompt("Edit Quarterly Goals Title:", "Quarterly Goals");
  if (newTitle !== null && newTitle.trim() !== "") {
    document.querySelector(".title-name").textContent = newTitle;
  }
});

// Function to add a new goal when the "Add a quarter goal" button is clicked
document.getElementById("add-goal-btn").addEventListener("click", () => {
  // Prompt the user for the new goal details
  const newGoalTitle = prompt("Enter a new quarter goal:");
  const newGoalHashtag = prompt("Enter a goal hashtag:");
  const newGoalStatus = prompt("Enter goal-completion status:");

  // Ensure none of the prompts are empty or canceled
  if (newGoalTitle && newGoalHashtag && newGoalStatus) {
    // Create a new goal item
    const newGoalItem = document.createElement("div");
    newGoalItem.classList.add("item");

    // Add the content for the new goal
    newGoalItem.innerHTML = `
        <div class="left">
          <img src="./checkbox.svg" alt="Edit" class="checkbox" />
          <div class="text">
            <h1 class="goal">${newGoalTitle}</h1>
            <p></p>
            <p class="tag" style="color: #9b72ee">#${newGoalHashtag}</p>
            <p class="number">${newGoalStatus}</p>
          </div>
        </div>
      `;

    // Append the new goal item to the list
    const goalList = document.getElementById("goal-list");
    goalList.appendChild(newGoalItem);

    // Add a horizontal line after the new goal
    const hr = document.createElement("hr");
    hr.classList.add("line");
    goalList.appendChild(hr);
  } else {
    alert("All fields must be filled out to add a new goal.");
  }
});
