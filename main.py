import eel
import random


eel.init('web')


rounds = 0
user_score = 0
computer_score = 0

history = []

userName = ""
computer_choice = ""
player_choice = ""



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



@eel.expose
def Streak_Mode(userChoise):
    global userScoreStreakMode, computerScoreStreakMode, history, computerChoice ,computer_score , player_choice

    choices = ["Rock", "Paper", "Scissors"]
    computer_choice = random.choice(choices)
    computerScoreStreakMode = computer_score
    userScoreStreakMode = user_score
    player_choice = userChoise


    if userChoise == computer_choice:
        result = "It's a tie!"
    elif (userChoise == "Rock" and computer_choice == "Scissors") or \
            (userChoise == "Paper" and computer_choice == "Rock") or \
            (userChoise == "Scissors" and computer_choice == "Paper"):
        result = "You win!"
        userScoreStreakMode += 1
    else :
        result = "computer win!"
        computerScoreStreakMode += 1


    history.append((userName, userChoise, computer_choice))



    for i, round_data in enumerate(history):
        userChoise = round_data[1]
        computerChoice = round_data[2]

    return result

@eel.expose
def userScoreStreakMode():
    global userScoreStreakMode
    userScoreStreak = userScoreStreakMode
    return userScoreStreak

@eel.expose
def computerScoreStreakMode():
    global computerScoreStreakMode
    computerScoreStreak = computerScoreStreakMode
    return computerScoreStreak


@eel.expose
def arenaMode(userChoice):
    global user_score, computer_score, userChoiceArenaMode, computerChoiceArenaMode
    userScoreArenaMode=user_score
    computerScoreArenaMode= computer_score
    userChoiceArenaMode= userChoice

    choices = ["Rock", "Paper", "Scissors"]
    computerChoiceArenaMode = random.choice(choices)
    if userChoiceArenaMode == computerChoiceArenaMode:
        result = "It's a tie!"
    elif (userChoiceArenaMode == "Rock" and computerChoiceArenaMode == "Scissors") or \
        (userChoiceArenaMode == "Paper" and computerChoiceArenaMode == "Rock") or \
        (userChoiceArenaMode == "Scissors" and computerChoiceArenaMode == "Paper"):
        result = "You win!"
        userScoreArenaMode += 1
    else:
        result = "Computer wins!"
        computerScoreArenaMode += 1

    return result

@eel.expose
def userScoreArena():
    global userScoreArenaMode
    return userScoreArenaMode

@eel.expose
def computerScoreArena():
    global computerScoreArenaMode
    return computerScoreArenaMode

@eel.expose
def userChoiceArena():
    global userChoiceArenaMode
    return userChoiceArenaMode

@eel.expose
def computerChoiceArena():
    global computerChoiceArenaMode
    return computerChoiceArenaMode




# Set the window size and position
window_size = {'width': 1600, 'height': 900}  # Adjust the size as desired
chrome_flags = ['--window-size={},{}'.format(window_size['width'], window_size['height'])]

eel.start('index.html', mode='chrome', port=8000, cmdline_args=chrome_flags)

# eel.start('index.html', mode='chrome', port=8080)

# window_size = {'width': 800, 'height': 600}
# chrome_flags = ['--window-size={},{}'.format(window_size['width'], window_size['height']),
#                 '--window-position=0,0', '--start-fullscreen']

# eel.start('index.html', mode='chrome', port=8080, cmdline_args=chrome_flags)