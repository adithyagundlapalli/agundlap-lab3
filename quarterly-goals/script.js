document.querySelector(".pencil-icon").addEventListener("click", () => {
  const newTitle = prompt("Edit Quarterly Goals Title:", "Quarterly Goals");
  if (newTitle !== null && newTitle.trim() !== "") {
    document.querySelector(".title-name").textContent = newTitle;
  }
});

document.getElementById("add-goal-btn").addEventListener("click", () => {
  const newGoalTitle = prompt("Enter a new quarter goal:");
  const newGoalHashtag = prompt("Enter a goal hashtag:");
  const newGoalStatus = prompt("Enter goal-completion status:");

  if (newGoalTitle && newGoalHashtag && newGoalStatus) {
    const newGoalItem = document.createElement("div");
    newGoalItem.classList.add("item");

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

    const goalList = document.getElementById("goal-list");
    goalList.appendChild(newGoalItem);

    const hr = document.createElement("hr");
    hr.classList.add("line");
    goalList.appendChild(hr);
  } else {
    alert("All fields must be filled out to add a new goal.");
  }
});
