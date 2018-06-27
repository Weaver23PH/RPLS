document.addEventListener("DOMContentLoaded", function () {

        var button = document.querySelectorAll("div .button");
        var screenS = document.querySelectorAll(".screen");
        var winner = "";
        const blinkCheck = document.getElementById("check");
        const blinkerBox = document.getElementById("blinkerBox");
        const languageVer = document.getElementById("language");
        const bigScreen = document.getElementById("bigscreen");
        const smallScreen = document.getElementById("smallscreen");
        const headScr = document.querySelector("#head p");
        const SpockScr = document.getElementById("SpockScr");
        const lizardScr = document.getElementById("lizardScr");
        const rockScr = document.getElementById("rockScr");
        const paperScr = document.getElementById("paperScr");
        const scissorsScr = document.getElementById("scissorsScr");
        const exitScr = document.getElementById("exitScr");
        const lizardButton = document.getElementById("lizard");
        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorsButton = document.getElementById("scissors");
        const exitButton = document.getElementById("exit");

        var pl1Score = 0;
        var cpuScore = 0;

        const language = {
            ENG: {
                headScroll: "Rock-Paper-Scissors-Lizard-Spock",
                blink: "Blink! \n (Chrome)",
                spockScreen: "smashes Scissors \n vaporizes Rock",
                lizardScreen: "poisons Spock \n eats Paper",
                lizardButton: "Lizard",
                rockScreen: "crushes Lizard \n crushes Scissors",
                rockButton: "Rock",
                paperScreen: "covers Rock \n disproves Spock",
                paperButton: "Paper",
                scissorsScreen: "cuts Paper \n decapitates Lizard",
                scissorsButton: "Scissors",
                exitScreen: "Press \n to end the match",
                exitButton: "Exit",
                youChoseMsg: "You chose ",
                cpuChoseMsg: ", the computer chose ",
                youWinMsg: ". You win!",
                cpuWinsMSg: ". The computer wins!",
                drawMSg: ". It's a draw!",
                youWinMatchMsg: "You win the match with ",
                cpuWinsMatchMsg: "The computer wins the match with ",
                points: " point(s)!"
            },
            PL: {
                headScroll: "Kamień-Papier-Nożyce-Jaszczur-Spock",
                blink: "Mrugaj! \n (Chrome)",
                spockScreen: "łamie nożyce \n odparowuje kamień",
                lizardScreen: "truje Spocka \n zjada papier",
                lizardButton: "Jaszczur",
                rockScreen: "zgniata jaszczura \n zgniata nożyce",
                rockButton: "Kamień",
                paperScreen: "zakrywa kamień \n zaprzecza Spockowi",
                paperButton: "Papier",
                scissorsScreen: "tnie papier \n odgławia jaszczura",
                scissorsButton: "Nożyce",
                exitScreen: "Naciśnij \n by skończyć mecz",
                exitButton: "Koniec",
                youChoseMsg: "Wybrałeś ",
                cpuChoseMsg: ", komputer wybrał ",
                youWinMsg: ". Wygrywasz!",
                cpuWinsMSg: ". Komputer wygrywa!",
                drawMSg: ". Remis!",
                youWinMatchMsg: "Wygrywasz mecz zdobywając ",
                cpuWinsMatchMsg: "Komputer wygrywa mecz zdobywając ",
                points: " punkt(y)!"
            }
        };

        var version = language.ENG;

        function textDefinitions() {
            headScr.innerText = version.headScroll;
            blinkerBox.innerText = version.blink;
            SpockScr.innerText = version.spockScreen;
            lizardScr.innerText = version.lizardScreen;
            rockScr.innerText = version.rockScreen;
            paperScr.innerText = version.paperScreen;
            scissorsScr.innerText = version.scissorsScreen;
            exitScr.innerText = version.exitScreen;
            lizardButton.innerText = version.lizardButton;
            rockButton.innerText = version.rockButton;
            paperButton.innerText = version.paperButton;
            scissorsButton.innerText = version.scissorsButton;
            exitButton.innerText = version.exitButton;
        }

        textDefinitions();
        blinkCheck.addEventListener("click", blinker);
        languageVer.addEventListener("click", languageChange);

        function blinker(event) {
            if (blinkCheck.checked) {
                for (i = 0; i < screenS.length; i++) {
                    (function (i) {
                            window.int1 = setInterval(function () {
                                screenS[i].style.color = "darkgreen"
                            }, 750);
                            window.int2 = setInterval(function () {
                                screenS[i].style.color = "lightgreen"
                            }, 1500);
                        }
                    )(i);
                }
            } else if (blinkCheck.checked != true) {
                for (i = 0; i < 10000; i++) {
                    window.clearInterval(i);
                }
            }
        }

        function languageChange(event) {
            if (languageVer.checked) {
                version = language.PL;
                textDefinitions();
            } else if (languageVer.checked != true) {
                version = language.ENG;
                textDefinitions();
            }
        }

        for (i = 0; i < button.length; i++) {
            button[i].addEventListener("mousedown", buttonClick);
            button[i].addEventListener("mouseover", buttonUnClick);
        }

        function buttonClick(event) {
            this.classList.add("hover");
            this.classList.add("clicked");
            var chosenOne = this.getAttribute("id");
            rockPaperScissors(chosenOne, cpuChoice());
            this.addEventListener("mouseup", function (event) {
                this.classList.remove("clicked");
            });
            return chosenOne;
        }

        function buttonUnClick(event) {
            this.classList.add("hover");
            var button = document.querySelectorAll("div .button");
            this.addEventListener("mouseout", function (event) {
                this.classList.remove("hover");
                this.classList.remove("clicked");
            });
        }

        function rockPaperScissors(player1, player2) {
            if ((player1 == "rock" && player2 == "scissors")
                || (player1 == "rock" && player2 == "lizard")
                || (player1 == "scissors" && player2 == "paper")
                || (player1 == "scissors" && player2 == "lizard")
                || (player1 == "paper" && player2 == "rock")
                || (player1 == "paper" && player2 == "Spock")
                || (player1 == "Spock" && player2 == "scissors")
                || (player1 == "Spock" && player2 == "rock")
                || (player1 == "lizard" && player2 == "Spock")
                || (player1 == "lizard" && player2 == "paper")) {
                winner = "player1";
            } else if ((player2 == "rock" && player1 == "scissors")
                || (player2 == "rock" && player1 == "lizard")
                || (player2 == "scissors" && player1 == "paper")
                || (player2 == "scissors" && player1 == "lizard")
                || (player2 == "paper" && player1 == "rock")
                || (player2 == "paper" && player1 == "Spock")
                || (player2 == "Spock" && player1 == "scissors")
                || (player2 == "Spock" && player1 == "rock")
                || (player2 == "lizard" && player1 == "Spock")
                || (player2 == "lizard" && player1 == "paper")) {
                winner = "computer";
            } else if (player1 == player2) {
                winner = "draw";
            } else if (player1 == "exit") {
                winner = "exit";
            }
            screenMessages(winner, player1, player2);
        }

        function screenMessages(winner, player1, player2){
            if (version === language.PL){
                switch(player1){
                    case "lizard":
                        player1 = "jaszczur";
                        break;
                    case "rock":
                        player1 = "kamień";
                        break;
                    case "paper":
                        player1 = "papier";
                        break;
                    case "scissors":
                        player1 = "nożyce";
                        break;
                }
                switch(player2){
                    case "lizard":
                        player2 = "jaszczur";
                        break;
                    case "rock":
                        player2 = "kamień";
                        break;
                    case "paper":
                        player2 = "papier";
                        break;
                    case "scissors":
                        player2 = "nożyce";
                        break;
                }
            }
            smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            if (winner === "player1") {
                bigScreen.innerText = version.youChoseMsg + player1 + version.cpuChoseMsg + player2 + version.youWinMsg;
                pl1Score++;
                smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            } else if (winner === "computer") {
                bigScreen.innerText = version.youChoseMsg + player1 + version.cpuChoseMsg + player2 + version.cpuWinsMSg;
                cpuScore++;
                smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            } else if (winner === "draw") {
                bigScreen.innerText = version.youChoseMsg + player1 + version.cpuChoseMsg + player2 + version.drawMSg;
            } else if (winner === "exit") {
                if (pl1Score > cpuScore) {
                    bigScreen.innerText = version.youWinMatchMsg + pl1Score + version.points;
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score < cpuScore) {
                    bigScreen.innerText = version.cpuWinsMatchMsg + cpuScore + version.points;
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score === cpuScore) {
                    bigScreen.innerText = version.drawMSg;
                    pl1Score = 0;
                    cpuScore = 0;
                }
            }
        }

        function cpuChoice() {
            var choiceArray = ["rock", "paper", "scissors", "lizard", "Spock"];
            var result = choiceArray[Math.floor(Math.random() * choiceArray.length)];
            return result;
        }


    }
);