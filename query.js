$(document).ready(() => {
    gardenInterval = setInterval(getGardening, 5000)
    electricityInterval = setInterval(getElectricity, 5000)
})
var baseUrl = " https://pheonix.loca.lt/"

getGardening = () => {
    $.ajax({
        "url": baseUrl + "api/gardening/readings/",
        "method": 'GET',
        "crossDomain": true,
        "dataType": 'json',
        "headers": {
            "accept": "application/json",
        },
        success: (data) => {
            console.log(data)
            const myElement = document.getElementById("gardening");
            myElement.innerHTML = JSON.stringify(data);
        },
        error: (xhr, status) => {
            console.log(xhr)
            console.log(status)
        }
    })
}

getElectricity = () => {
    $.ajax({
        "url": baseUrl + "api/socket/readings/",
        "method": 'GET',
        "crossDomain": true,
        "dataType": 'json',
        "headers": {
            "accept": "application/json",
        },
        success: (data) => {
            console.log(data)
            const myElement = document.getElementById("shakthi");
            myElement.innerHTML = JSON.stringify(data);
        },
        error: (xhr, status) => {
            console.log(xhr)
            console.log(status)
        }
    })
}

window.onbeforeunload = () => {
    clearInterval(gardenInterval)
    clearInterval(electricityInterval)
}