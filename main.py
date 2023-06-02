import eel
import random

eel.init('web')

rounds = 0
user_score = 0
computer_score = 0

userName = ""


@eel.expose
def setUserName(name):
    global userName
    userName = name

    if len(userName) == 0 :
        userName = "User"
    else:    
        userName = name


@eel.expose
def getUserName():
    global userName
    return userName


@eel.expose
def setRounds(roundsNumber):
    global rounds
    rounds = int(roundsNumber)

@eel.expose
def getRounds():
    global rounds
    return rounds

@eel.expose
def mouseClassic(userChoise):
    global user_score, computer_score, rounds
    
    choices = ["Rock", "Paper", "Scissors"]
    computerChoice = random.choice(choices)

    if userChoise == computerChoice:
        result = "It's a tie!"
    elif (userChoise == "Rock" and computerChoice == "Scissors") or \
        (userChoise == "Paper" and computerChoice == "Rock") or \
        (userChoise == "Scissors" and computerChoice == "Paper"):
        result = "You win!"
        user_score += 1
    else:
        result = "Computer wins!"
        computer_score += 1

    return result

eel.start('index.html', port=8080)

