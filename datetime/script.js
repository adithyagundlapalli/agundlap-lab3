function updateDateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const dateSuffix = getDateSuffix(day);
  const formattedDate = `${month} ${day}${dateSuffix}, ${year}`;

  document.getElementById("hours").textContent = `${hours}:${minutes}`;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = formattedDate;
}

function getDateSuffix(day) {
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);
