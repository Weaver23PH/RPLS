document.addEventListener("DOMContentLoaded", function () {
        const bigScreen = document.getElementById("bigscreen");
        const smallScreen = document.getElementById("smallscreen");
        var button = document.querySelectorAll("div .button");
        var screenS = document.querySelectorAll(".screen");
        const blinkCheck = document.getElementById("check");
        var pl1Score = 0;
        var cpuScore = 0;

        blinkCheck.addEventListener("click", blinker);

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
            }else if(blinkCheck.checked != true){
                for(i=0; i<10000; i++)
                {
                    window.clearInterval(i);
                }
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
            smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
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
                bigScreen.innerText = "You chose " + player1 + ", the computer chose " + player2 + ". You win!";
                pl1Score++;
                smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
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
                bigScreen.innerText = "You chose " + player1 + ", the computer chose " + player2 + ". The computer wins!";
                cpuScore++;
                smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            } else if (player1 == player2) {
                bigScreen.innerText = "You chose " + player1 + ", the computer chose " + player2 + ". It's a draw!"
            } else if (player1 == "exit") {
                if (pl1Score > cpuScore) {
                    bigScreen.innerText = "You win the match with " + pl1Score + " point(s)!";
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score < cpuScore) {
                    bigScreen.innerText = "The computer wins the match with " + cpuScore + " point(s)!";
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score == cpuScore) {
                    bigScreen.innerText = "It's a draw!"
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