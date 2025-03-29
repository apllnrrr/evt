function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    console.log(now)
    const secondDegree = ((seconds / 60) * 360);
    const minuteDegree = ((minutes / 60) * 360);
    const hourDegree = ((hours / 12) * 360);

    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();