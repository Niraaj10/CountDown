// const setTargetDate = document.getElementById('setTargetDate').Date
// console.log(setTargetDate);
const countdown = document.getElementById("countdown");
const startbtn = document.getElementById("startBtn");


startbtn.addEventListener("click", () => {
    const targetDate = document.getElementById("setTargetDate");
    const countdownDate = new Date(targetDate.value).getTime();
    console.log(countdownDate);

    if (isNaN(countdownDate)) {
        // const Invalid = 
        document.getElementById("Invalid").innerHTML = "Please Enter a valid date and time";

        return;
    }

    if (typeof timeoutId !== 'undefined') {
        clearTimeout(timeoutId)
    }



    function updateCountdown() {
        const currentDate = new Date();

        const timeDifference = countdownDate - currentDate;
        console.log(timeDifference);

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        console.log(days);

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // const hours = days*24;
        console.log(hours);

        const min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        console.log(min);

        const sec = Math.floor((timeDifference % (1000 * 60)) / 1000);
        console.log(sec);

        // document.getElementById('countdown').innerHTML = `${days} D ${hours} H ${min} M ${sec} S `;

        // setTimeout(updateCountdown,1000)
        if (timeDifference < 0) {
            document.getElementById("Invalid").innerHTML = "EXPIRED";
        } else {
            timeoutId = setTimeout(updateCountdown, 1000);

            document.getElementById('countdown').innerHTML = `${days} D ${hours} H ${min} M ${sec} S `;

        }
    }

    updateCountdown();


})
