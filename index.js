const myInterval = setInterval(setColor,2500)
const buttonStop = document.getElementById("stop")

function setColor(){
    const color1=Math.floor(Math.random()*255)
    const color2=Math.floor(Math.random()*255)
    const color3=Math.floor(Math.random()*255)

    const bgColor = `rgb(${color1}, ${color2}, ${color3})`
    const displayColor = `Red : ${color1} | Green : ${color2} | Blue : ${color3}`

    document.body.style.background = bgColor
    document.getElementById("colorText").innerHTML = displayColor
}

function stopColor() {
    clearInterval(myInterval);
  }

buttonStop.addEventListener('click', () =>{
    stopColor()   
})