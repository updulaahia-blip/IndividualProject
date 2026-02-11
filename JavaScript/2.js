 teamSelect = document.getElementById("team");
 ticketTypeSelect = document.getElementById("ticketType");
 quantityInput = document.getElementById("quantity");
 nameInput = document.getElementById("customerName");
 addressInput = document.getElementById("address");
 seatSelect = document.getElementById("seat");
 orderBtn = document.getElementById("orderBtn");
 message = document.getElementById("message");
 summary = document.getElementById("summary");

let availableTickets = {
    "Barcelona": 50,
    "Real Madrid": 50
};

orderBtn.addEventListener("click", orderTicket);

function orderTicket() {
     team = teamSelect.value;
     ticketType = ticketTypeSelect.value;
     quantity = Number(quantityInput.value);
     name = nameInput.value.trim();
     address = addressInput.value.trim();
     seat = seatSelect.value;

    if (
        name === "" ||
        address === "" ||
        seat === "" ||
        team === "" ||
        ticketType === "" ||
        quantity <= 0
    ) {
        message.textContent = "Please complete all fields correctly.";
        summary.textContent = "";
        return;
    }

    if (quantity > availableTickets[team]) {
        message.textContent = `Only ${availableTickets[team]} tickets available for ${team}.`;
        summary.textContent = "";
        return;
    }

    message.textContent = "";

    let pricePerTicket = ticketType === "vip" ?120 : 50;
    let totalPrice = pricePerTicket * quantity;

    availableTickets[team] -= quantity;

    summary.innerHTML = `
        Order Your info order<br><br>
        Name: ${name}<br>
        Address: ${address}<br>
        Team: ${team}<br>
        Seat Section: ${seat}<br>
        Ticket Type: ${ticketType.toUpperCase()}<br>
        Quantity: ${quantity}<br>
        <hr>
        Total Price: $${totalPrice}<br>
        Remaining ${team} Tickets: ${availableTickets[team]}
    `;
}