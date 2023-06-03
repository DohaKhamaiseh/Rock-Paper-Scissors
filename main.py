import eel
import random

eel.init('web')

rounds = 0
nine_user_score = 0
nine_computer_score = 0

nine_user_choice = ""
nine_computer_choice = ""

userName = ""

user_score = 0
computer_score = 0

history = []

rock_count, paper_count, scissors_count = 0, 0, 0

computer_choices = ["Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors"]


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
######################################################### mouseClassic ########################

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

######################################################### Avatar ########################

@eel.expose
def Avatar(userChoise):
    global user_score, computer_score, rounds
    choices = ["Fire", "Water", "Wind", "Earth"]
    computer_choice = random.choice(choices)

    if userChoise == computer_choice:
        result = "It's a tie!"
    elif (userChoise == "Earth" and computer_choice == "Water") or \
            (userChoise == "Water" and computer_choice == "Fire") or \
            (userChoise == "Fire" and computer_choice == "Wind") or \
            (userChoise == "Wind" and computer_choice == "Earth"):
        result = "You win!"
        user_score += 1
    else:
        result = "Computer wins!"
        computer_score += 1

    return result

######################################################### challenge_mode ########################

@eel.expose
def challenge_mode(user_choice):
    global rounds, userScoreChallengeMode , computerScoreChallengeMode,  playerChoice, computerChoice, coins
    userScoreChallengeMode = user_score
    computerScoreChallengeMode = computer_score

    choices = ["Rock", "Paper", "Scissors"]
    computer_choice = random.choice(choices)
    coins = 10
    if user_choice == computer_choice:
        result = "It's a tie!"
    elif (user_choice == "Rock" and computer_choice == "Scissors") or \
            (user_choice == "Paper" and computer_choice == "Rock") or \
            (user_choice == "Scissors" and computer_choice == "Paper"):
        result = "You win!"
        userScoreChallengeMode += 1
        coins += 10  # Increase coins by 10 for winning
    else:
        result = "Computer wins!"
        computerScoreChallengeMode += 1
        coins -= 10
    return result


@eel.expose
def userScoreChallengeMode():
    global userScoreChallengeMode
    userScoreChallenge = userScoreChallengeMode
    return userScoreChallenge

@eel.expose
def computerScoreChallengeMode():
    global computerScoreChallengeMode
    computerScoreChallenge = computerScoreChallengeMode
    return computerScoreChallenge

@eel.expose
def coinsChallengeMode():
    global coins
    coinsChallenge = coins
    return coinsChallenge

######################################################### nineCards_mode ########################

# @eel.expose
# def reset():
#     global user_score, computer_score, rounds, rock_count, paper_count, scissors_count
#     user_score = 0
#     computer_score = 0
#     rounds = 9
#     rock_count = 0
#     paper_count = 0
#     scissors_count = 0

@eel.expose
def nineCards_mode(user_choice):
    global rounds, nine_user_score , nine_computer_score , history, nine_user_choice , nine_computer_choice

    computer_choice = random.choice(computer_choices)

    nine_user_choice = user_choice
    nine_computer_choice = computer_choice

    if user_choice == computer_choice:
        result = "It's a tie!"
    elif (user_choice == "Rock" and computer_choice == "Scissors") or \
            (user_choice == "Paper" and computer_choice == "Rock") or \
            (user_choice == "Scissors" and computer_choice == "Paper"):
        result = "You win!"
        nine_user_score += 1
    else:
        result = "Computer wins!"
        nine_computer_score += 1

    rounds -= 1

    history.append((rounds + 1, user_choice, computer_choice, nine_user_score, nine_computer_score))

    return result

@eel.expose
def create_rock_button():
    global rock_count
    rock_count += 1
    return rock_count

@eel.expose
def create_paper_button():
    global paper_count
    paper_count += 1
    return paper_count

@eel.expose
def create_scissors_button():
    global scissors_count
    scissors_count += 1
    return scissors_count


@eel.expose
def userScoreArena():
    global  nine_user_score
    return  nine_user_score
   

@eel.expose
def computerScoreNine():
    global nine_computer_score
    return nine_computer_score

# @eel.expose
# def userChoiceNine():
#     global nine_user_choice
#     return nine_user_choice


@eel.expose
def computerChoiceNine():
    global  nine_computer_choice
    return  nine_computer_choice


eel.start('index.html', port=8080)

