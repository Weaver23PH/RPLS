document.addEventListener("DOMContentLoaded", function () {
        const bigScreen = document.getElementById("bigscreen");
        const smallScreen = document.getElementById("smallscreen");
        var button = document.querySelectorAll("div .button");
        var screenS = document.querySelectorAll(".screen");
        const headScreen = document.getElementById("head");
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
            kamieńpapiernożyce(chosenOne, cpuChoice());
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


        function kamieńpapiernożyce(player1, player2) {
            smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            if ((player1 == "kamień" && player2 == "nożyce")
                || (player1 == "kamień" && player2 == "jaszczur")
                || (player1 == "nożyce" && player2 == "papier")
                || (player1 == "nożyce" && player2 == "jaszczur")
                || (player1 == "papier" && player2 == "kamień")
                || (player1 == "papier" && player2 == "Spock")
                || (player1 == "Spock" && player2 == "nożyce")
                || (player1 == "Spock" && player2 == "kamień")
                || (player1 == "jaszczur" && player2 == "Spock")
                || (player1 == "jaszczur" && player2 == "papier")) {
                bigScreen.innerText = "Wybrałeś " + player1 + ", komputer wybrał " + player2 + ". Wygrywasz!";
                pl1Score++;
                smallScreen.innerHTML = ("Score : " + "\n" + pl1Score + " : " + cpuScore);
            } else if ((player2 == "kamień" && player1 == "nożyce")
                || (player2 == "kamień" && player1 == "jaszczur")
                || (player2 == "nożyce" && player1 == "papier")
                || (player2 == "nożyce" && player1 == "jaszczur")
                || (player2 == "papier" && player1 == "kamień")
                || (player2 == "papier" && player1 == "Spock")
                || (player2 == "Spock" && player1 == "nożyce")
                || (player2 == "Spock" && player1 == "kamień")
                || (player2 == "jaszczur" && player1 == "Spock")
                || (player2 == "jaszczur" && player1 == "papier")) {
                bigScreen.innerText = "Wybrałeś " + player1 + ", komputer wybrał " + player2 + ". Komputer wygrywa!";
                cpuScore++;
                smallScreen.innerHTML = ("Wynik : " + "\n" + pl1Score + " : " + cpuScore);
            } else if (player1 == player2) {
                bigScreen.innerText = "Wybrałeś " + player1 + ", komputer wybrał " + player2 + ". Remis!"
            } else if (player1 == "exit") {
                if (pl1Score > cpuScore) {
                    bigScreen.innerText = "Wygrywasz mecz zdobywając " + pl1Score + " punkt(y)!";
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score < cpuScore) {
                    bigScreen.innerText = "Komputer wygrywa mecz zdobywając " + cpuScore + " punkt(y)!";
                    pl1Score = 0;
                    cpuScore = 0;
                } else if (pl1Score == cpuScore) {
                    bigScreen.innerText = "Remis!"
                    pl1Score = 0;
                    cpuScore = 0;
                }
            }
        }

        function cpuChoice() {
            var choiceArray = ["kamień", "papier", "nożyce", "jaszczur", "Spock"];
            var result = choiceArray[Math.floor(Math.random() * choiceArray.length)];
            return result;
        }


    }
);