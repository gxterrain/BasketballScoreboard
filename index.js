// assign variable scores to zero
let homeCountScore = 0
let guestCountScore = 0

// assign onclick to all the buttons via parent:child relation
const container = document.querySelector(".container")

// paragraph score tag
let homeDisplay = document.getElementById("home-display")
let guestDisplay = document.getElementById("guest-display")

// add event listener to target, increment 1,2,3 in html using dataset
// then run highlight function
container.addEventListener('click', function(e){
    const target = e.target
    const homePts = target.dataset.homePts
    const guestPts = target.dataset.guestPts

    if (homePts){
        homeCountScore += +homePts
        homeDisplay.textContent = homeCountScore
    }

    if (guestPts){
        guestCountScore += +guestPts
        guestDisplay.textContent = guestCountScore
    }

    highlight()
})

// assign scoreboard variables so they can be accessed in multiple functions (add highlight/remove highlight)
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function highlight(){
    homeScore.classList.toggle("highlighter", homeCountScore > guestCountScore)
    guestScore.classList.toggle("highlighter", guestCountScore > homeCountScore)
}

// New Game, reset score and display
const newGame = document.getElementById("newGame")
newGame.addEventListener('click', function(){
    homeCountScore = 0
    guestCountScore = 0
    homeDisplay.textContent = homeCountScore
    guestDisplay.textContent = guestCountScore
    homeScore.classList.remove("highlighter")
    guestScore.classList.remove("highlighter")
})