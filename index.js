// let homeCount = 0
// let guestCount = 0

// document.getElementById("home-count").textContent = homeCount

// document.getElementById("guest-count").textContent = guestCount


let homeCount = document.getElementById("home-count")

homeCountScore = 0

function add1(){
    homeCountScore = homeCountScore + 1
    homeCount.textContent = homeCountScore
}


function add2(){
    homeCountScore = homeCountScore + 2
    homeCount.textContent = homeCountScore
 }

function add3(){
    homeCountScore = homeCountScore + 3
    homeCount.textContent = homeCountScore
     }


let guestCount = document.getElementById("guest-count")

let guestCountScore = 0

function addGuest1(){
    guestCountScore = guestCountScore + 1
    guestCount.textContent = guestCountScore
}

function addGuest2(){
    guestCountScore = guestCountScore + 2
    guestCount.textContent = guestCountScore
 }

function addGuest3(){
    guestCountScore = guestCountScore + 3
    guestCount.textContent = guestCountScore
     }


     if (+homeCount > +guestCount) {
        document.getElementById("home-count").style.backgroundColor = "#d7ff00";
      } else if (+homeCount < +guestCount){
      document.getElementById("guest-count").style.backgroundColor = "#d7ff00";
      }

