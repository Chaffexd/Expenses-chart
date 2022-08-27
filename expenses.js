// For the bar chart
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const bar5 = document.getElementById("bar5");
const bar6 = document.getElementById("bar6");
const bar7 = document.getElementById("bar7");

// Hover elements
const monHover = document.getElementById("monValue");
const tueHover = document.getElementById("tueValue");
const wedHover = document.getElementById("wedValue");
const thuHover = document.getElementById("thuValue");
const friHover = document.getElementById("friValue");
const satHover = document.getElementById("satValue");
const sunHover = document.getElementById("sunValue");

// Update the total this month
const totalThisMonth = document.getElementById("total");

const fullWeek = [bar7, bar1, bar2, bar3, bar4, bar5, bar6, bar7];
// Sets the current day
const day = new Date();
// Returns the day as a number, 0 - 6, note: 0 is Sunday, 6 is Saturday
let currentDay = fullWeek[day.getDay()];
console.log(currentDay);

// Get all bars
const bars = document.getElementsByClassName("bar");


// Grab the data from the JSON
fetch("/data.json")
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        // Shows us the data we have to play with
        console.log(data);
        // Set the height of the bars dynamically in em
        bar1.style.height = ((data[0].amount) * 2.86 / 18) + "em";
        bar2.style.height = ((data[1].amount) * 2.86 / 18) + "em";
        bar3.style.height = ((data[2].amount) * 2.86 / 18) + "em";
        bar4.style.height = ((data[3].amount) * 2.86 / 18) + "em";
        bar5.style.height = ((data[4].amount) * 2.86 / 18) + "em";
        bar6.style.height = ((data[5].amount) * 2.86 / 18) + "em";
        bar7.style.height = ((data[6].amount) * 2.86 / 18) + "em";
        // This gives the actual total spent in this week, hence different number
        const total = data[0].amount + data[1].amount  + data[2].amount  + data[3].amount  + data[4].amount  + data[5].amount  + data[6].amount;
        console.log(total);
        totalThisMonth.innerHTML = `$${total}`;

        // Updates the current day bar background color
        currentDay.classList.add("activeDay");

        bar1.addEventListener("mouseover", () => {
            monHover.style.display = "flex";
            monHover.innerHTML = `$${data[0].amount}`
        });
        bar1.addEventListener("mouseleave", () => {
            monHover.style.display = "none";
        });

        bar2.addEventListener("mouseover", () => {
            tueHover.style.display = "flex";
            tueHover.innerHTML = `$${data[1].amount}`
        });
        bar2.addEventListener("mouseleave", () => {
            tueHover.style.display = "none";
        });

        bar3.addEventListener("mouseover", () => {
            wedHover.style.display = "flex";
            wedHover.innerHTML = `$${data[2].amount}`
        });
        bar3.addEventListener("mouseleave", () => {
            wedHover.style.display = "none";
        });

        bar4.addEventListener("mouseover", () => {
            thuHover.style.display = "flex";
            thuHover.innerHTML = `$${data[3].amount}`
        });
        bar4.addEventListener("mouseleave", () => {
            thuHover.style.display = "none";
        });

        bar5.addEventListener("mouseover", () => {
            friHover.style.display = "flex";
            friHover.innerHTML = `$${data[4].amount}`
        });
        bar5.addEventListener("mouseleave", () => {
            friHover.style.display = "none";
        });

        bar6.addEventListener("mouseover", () => {
            satHover.style.display = "flex";
            satHover.innerHTML = `$${data[5].amount}`
        });
        bar6.addEventListener("mouseleave", () => {
            satHover.style.display = "none";
        });

        bar7.addEventListener("mouseover", () => {
            sunHover.style.display = "flex";
            sunHover.innerHTML = `$${data[6].amount}`
        });
        bar7.addEventListener("mouseleave", () => {
            sunHover.style.display = "none";
        });
    })
    // Catches any errors just incase
    .catch((err) => {
        console.log(err);
    });

