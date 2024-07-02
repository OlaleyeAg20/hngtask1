const dayOfTheWeek = document.getElementById("dayOfTheWeek")
const currentTimeOutput = document.getElementById('currentTimeOutPut')

const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const theCurrentDate = new Date()
dayOfTheWeek.textContent = daysArray[theCurrentDate.getUTCDay()]

setInterval(()=>{
    const currentDate = new Date()
    const currentTime = currentDate.toUTCString().slice(17,25)
    currentTimeOutput.textContent = currentTime
}, 1000)
