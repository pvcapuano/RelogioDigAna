let digitalElement = document.querySelector('.digital')
let digitalDate = document.querySelector('.full_date')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    let day = now.getDay()
    let month = now.getMonth()
    let year = now.getFullYear()

    let month_name = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    let day_name = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")
    
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    digitalDate.innerHTML = `${day_name[day]}, dia ${fixDay(day)} de ${month_name[month]} de ${year}`

    // grau do ponteiro dos segundos. 360 (graus do circulo) dividido por 60 segundos
    // = 6 graus pra cada segundo. menos 90 graus pra ajeitar o ponteiro
    let sDeg = ((360 / 60 ) * second) - 90
    let mDeg = ((360 / 60 ) * minute) - 90
    //  divide por 12 horas 
    let hDeg = ((360 / 12) * hour ) -90  

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixDay(day) {
    return day < 10 ? `0${day}` : day
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time 
}

setInterval(updateClock, 1000)
updateClock()