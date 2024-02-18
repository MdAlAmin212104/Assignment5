let seatCount = 0;
let seatAvailable = 40;
let price = 0;
const seats = document.querySelectorAll('.kbd');
let seatNumber = document.getElementById('seat-count').innerText;
let couponCode = document.getElementById('coupon-apply');
const numberElements = document.getElementById('number');
const nextBtn = document.getElementById('nextBtn');

function hiddenElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('hidden');

}
function showElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('hidden');
}

function next (){
      hiddenElementById('header');
      showElementById('success');
}

function nextStep(){
      showElementById('header');
      hiddenElementById('success');

}



for (const seat of seats) {
      seat.addEventListener('click', function(event) {
            // Check if seat has already been clicked
            if (!seat.classList.contains('clicked')) {
                  // Mark seat as clicked
                  seat.classList.add('clicked');
                  // Increment seat count
                  seatCount += 1;
                  seatAvailable -= 1;
                  
            // seat price here
            price = seatCount * 550;
            setInnerText('total-price', price);      
                  
            

            //seat count logic


            if(seatCount >=5){
                  alert("You can't buy more seat!");
                  return;
            }
            setInnerText('seat-count', seatCount);
            setInnerText('seat-left', seatAvailable);

            if(seatCount >=4){
                  couponCode.disabled = false;
            }
             

            // if(seatCount == 1 && )
            
            
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


            numberElements.addEventListener('keyup', function(event){
                  const element = event.target.value.length;
                  
                  if(seatCount > 0 && element === 11 ){
                        nextBtn.disabled = false;
      
                  }
            })

      }

      // Remove event listener after first click
      seat.removeEventListener('click', this);
});
}



couponCode.addEventListener("click", function(){
      const couponElement = document.getElementById('input-field').value;
      const coupon = couponElement.split(" ").join('').toUpperCase();
      if(coupon == "NEW15"){
            const discountAmount = price * 0.15;
            const grandPrice = (price - discountAmount).toFixed(2);
            setInnerText('grand-total', grandPrice);
            document.getElementById('input-field').value = ' ';
      }else if(coupon == "COUPLE20"){
            const discountAmount = price * 0.2;
            const grandPrice = (price - discountAmount).toFixed(2);
            setInnerText('grand-total', grandPrice);
            document.getElementById('input-field').value = ' ';

      }
      else{
            alert("Please enter valid coupon code.");
      }
      
      couponCode.disabled = true;
})


function setInnerText(id, value) {
      document.getElementById(id).innerText = value;
}

