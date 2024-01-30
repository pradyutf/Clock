let isClockRunning = false;
let clockInterval; 

function startClock() {
    isClockRunning = true;
    runClock();
}

function pauseClock() {
    isClockRunning = false;
    clearInterval(clockInterval);
}

function runClock() {
    if (isClockRunning) {
        // Your existing clock update logic here
        clockInterval = setInterval(() => {
            let hourImages = [
                'nums/12.png',
                'nums/1.png',
                'nums/2.png',
                'nums/3.png',
                'nums/4.png',
                'nums/5.png',
                'nums/6.png',
                'nums/7.png',
                'nums/8.png',
                'nums/9.png',
                'nums/10.png',
                'nums/11.png'
            ];
            let currentHour = new Date().getHours();
            let index = currentHour%12;
            let bg = document.querySelector(".hour");
            bg.style.backgroundImage = `url(${hourImages[index]})`;
            
           
        
        
            let secDial = document.querySelector(".seconds");
            let minDial = document.querySelector(".minutes");
            let hourDial = document.querySelector(".hour");
        
            let numList = document.querySelectorAll(".num");
            let minList = document.querySelectorAll(".min");
        
            let d = new Date();
        
            let second = (d.getSeconds()*6)-90;
            let minute = second-((d.getMinutes()*6)-90);
            let hour = (d.getHours() % 12 * 30) - 90; 
        
        
            secDial.style.transform = `rotate(${-second}deg)`;
            for(i of numList){
                i.style.transform = `rotate(${second}deg)`;
            }
            minDial.style.transform = `rotate(${minute}deg)`;
            for(j of minList){
                j.style.transform = `rotate(${second-minute}deg)`;
            }
           hourDial.style.transform =`rotate(${second-minute}deg)`
        
        }, 1000);
        
    }
}
