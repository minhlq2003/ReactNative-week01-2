function findTeamWin ( dolphinsScore, koalasScore) {
    if(dolphinsScore < 100 && koalasScore < 100) {
        console.log("No team wins the trophy!");
    } else if(dolphinsScore > koalasScore) {
        console.log("Dolphins win the trophy!");
    } else if(koalasScore > dolphinsScore) {
        console.log("Koalas win the trophy!");
    } else {
        console.log("Both teams win the trophy!");
    }
}

const dolphinsScore1 = (96 + 108 + 89) / 3;
const koalasScore1 = (88 + 91 + 110) / 3;

const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 123) / 3;

const dolphinsScore3 = (97 + 112 + 101) / 3;
const koalasScore3 = (109 + 95 + 106) / 3;

findTeamWin(dolphinsScore1, koalasScore1);
findTeamWin(dolphinsScore2, koalasScore2);
findTeamWin(dolphinsScore3, koalasScore3);