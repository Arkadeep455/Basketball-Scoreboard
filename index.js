let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}




let ScoreBtnOne = document.getElementById("guest-score-btn-1")
let ScoreBtnTwo = document.getElementById("guest-score-btn-2")
let ScoreBtnThree = document.getElementById("guest-score-btn-3")
let StoreEl =document.getElementById("guest-score")
let Score = 0

function increaseScoreOne(){
    Score += 1
    StoreEl.textContent = Score
}
function increaseScoreTwo(){
    Score += 2
    StoreEl.textContent = Score
}
function increaseScoreThree(){
    Score += 3
    StoreEl.textContent = Score
}





function resetbtn(){

homeScore=0
Score=0

homeStoreEl.textContent=homeScore
StoreEl.textContent=Score


}