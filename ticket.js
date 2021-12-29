const tBody = document.querySelector(".rwd-table tbody");

let tickets = localStorage.getItem("tickets")
  ? JSON.parse(localStorage.getItem("tickets"))
  : [];

if (!tickets.length) {
  const row = document.createElement("tr");
  row.innerHTML =
    "<td></td><td>No tickets booked right now</td><td></td><td></td>";
  tBody.appendChild(row);
}

tickets.forEach((ticket, ind) => {
  const row = document.createElement("tr");

  const sNo = document.createElement("td");
  sNo.innerText = ind + 1;
  const userName = document.createElement("td");
  userName.innerText = ticket.userName;
  const date = document.createElement("td");
  date.innerText = ticket.date;
  const removeBtnTd = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Cancel Ticket";
  removeBtn.classList.add("cancel-btn");

  console.log(ticket.id);
  removeBtn.addEventListener("click", () => handleDelete(ticket.id));

  removeBtnTd.appendChild(removeBtn);
  row.appendChild(sNo);
  row.appendChild(userName);
  row.appendChild(removeBtn);
  row.appendChild(date);

  tBody.appendChild(row);
});

function handleDelete(id) {
  tickets = tickets.filter((ticket) => ticket.id !== id);

  console.log(tickets);
  localStorage.setItem("tickets", JSON.stringify(tickets));
  window.location.reload();
}
