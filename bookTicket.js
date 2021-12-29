const ticketSection = document.querySelector(".ticket-section");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".ticket-button");
const userName = document.querySelectorAll(".inputs input")[0];
const email = document.querySelectorAll(".inputs input")[1];
const number = document.querySelectorAll(".inputs input")[2];

const tickets = localStorage.getItem("tickets")
  ? JSON.parse(localStorage.getItem("tickets"))
  : [];

const bookTicket = (e) => {
  e.preventDefault();

  const ticket = {
    id: tickets.length + 1,
    userName: userName.value,
    email: email.value,
    number: number.value,
    date: new Date().toJSON().slice(0, 10),
  };

  tickets.push(ticket);

  localStorage.setItem("tickets", JSON.stringify(tickets));
  alert(`Your ticket has been booked with the username ${userName.value}`);
};

submitBtn.addEventListener("click", (e) => bookTicket(e));
