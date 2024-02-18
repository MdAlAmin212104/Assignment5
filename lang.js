const seats = document.querySelectorAll('.kbd');
let seatCount = 0;

for (const seat of seats) {
    seat.addEventListener('click', function(event) {
        // Check if seat has already been clicked
        if (!seat.classList.contains('clicked')) {
            // Mark seat as clicked
            seat.classList.add('clicked');
            // Increment seat count
            seatCount += 1;
            // click and backgroundColor apply
            seat.style.backgroundColor = "#1DD100";

            const seatAppend = document.getElementById('seat-append');
            // create a div element
            let div = document.createElement("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.style.marginTop = "16px";

            // create a div element as child of h2 element
            const h2 = document.createElement("h2");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            p1.innerText = "Economy";
            p2.innerText = "550";

            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);

            seatAppend.appendChild(div);

            h2.innerText = seat.innerText;
            console.log(seatCount);
      }

        // Remove event listener after first click
        seat.removeEventListener('click', this);
    });
}