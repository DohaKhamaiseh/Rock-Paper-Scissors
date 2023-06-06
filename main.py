import eel
import random
# import Cam.cam as camera


eel.init('web')


rounds = 0
user_score = 0
computer_score = 0
nine_user_score = 0
nine_computer_score = 0
rock_count, paper_count, scissors_count = 0, 0, 0

history = []
computer_choices = ["Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors", "Rock", "Paper", "Scissors"]

userName = ""
computer_choice = ""
player_choice = ""
nine_user_choice = ""
nine_computer_choice = ""



# Camera
@eel.expose
def camFun():
    cam = camera.camStart()
    return cam


# UserName    
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


# Rounds
@eel.expose
def setRounds(roundsNumber):
    global rounds
    rounds = int(roundsNumber)

@eel.expose
def getRounds():
    global rounds
    return rounds



# Classic Mode
@eel.expose
def mouseClassic(userChoise):
    global user_score, computer_score, rounds, userChoiceClassicMode,classicRounds,computerChoiceclassicMode, userScoreClassicMode, computerScoreClassicMode
    classicRounds=rounds
    userScoreClassicMode=user_score
    computerScoreClassicMode=computer_score
    userChoiceClassicMode= userChoise

    choices = ["Rock", "Paper", "Scissors"]
    computerChoiceclassicMode = random.choice(choices)

    if userChoiceClassicMode == computerChoiceclassicMode:
        result = "It's a tie!"
    elif (userChoiceClassicMode == "Rock" and computerChoiceclassicMode == "Scissors") or \
        (userChoiceClassicMode == "Paper" and computerChoiceclassicMode == "Rock") or \
        (userChoiceClassicMode == "Scissors" and computerChoiceclassicMode == "Paper"):
        result = "You win!"
        computerScoreClassicMode += 1
    else:
        result = "Computer wins!"
        computerScoreClassicMode += 1

    return result


@eel.expose
def userScoreClassic():
    global userScoreClassicMode
    return userScoreClassicMode


@eel.expose
def computerScoreClassic():
    global computerScoreClassicMode
    return computerScoreClassicMode


@eel.expose
def userChoiceClassic():
    global userChoiceClassicMode
    return userChoiceClassicMode


@eel.expose
def computerChoiceClassic():
    global computerChoiceclassicMode
    return computerChoiceclassicMode



# Avatar Mode 
@eel.expose
def Avatar(userChoise):
    global user_score, computer_score, userScoreAvatar, computerScoreAvatar, rounds, computerChoiceAvatar , userChoiceAvatar
    choices = ["Fire", "Water", "Wind", "Earth"]
    computer_choice = random.choice(choices)

    computerChoiceAvatar = computer_choice
    userChoiceAvatar = userChoise

    userScoreAvatar = user_score 
    computerScoreAvatar = computer_score

    if userChoiceAvatar == computerChoiceAvatar:
        result = "It's a tie!"
    elif (userChoiceAvatar == "Earth" and computerChoiceAvatar == "Water") or \
            (userChoiceAvatar == "Water" and computerChoiceAvatar == "Fire") or \
            (userChoiceAvatar == "Fire" and computerChoiceAvatar == "Wind") or \
            (userChoiceAvatar == "Wind" and computerChoiceAvatar == "Earth"):
        result = "You win!"
        user_score += 1
    else:
        result = "Computer wins!"
        computerScoreAvatar += 1

    return result


@eel.expose
def userScoreAvatarMode():
    global userScoreAvatar
    return userScoreAvatar


@eel.expose
def computerScoreAvatarMode():
    global computerScoreAvatar
    return computerScoreAvatar


@eel.expose
def computerChoiceAvatarMode():
    global computerChoiceAvatar
    return computerChoiceAvatar


@eel.expose
def userChoiceAvatarMode():
    global userChoiceAvatar
    return userChoiceAvatar



# Challenge Mode 
@eel.expose
def challenge_mode(user_choice):
    global rounds, userScoreChallengeMode , computerScoreChallengeMode, coins , computerChoiceChallengeMode
    userScoreChallengeMode = user_score
    computerScoreChallengeMode = computer_score

    choices = ["Rock", "Paper", "Scissors"]
    computerChoiceChallengeMode = random.choice(choices)
    coins = 0
    if user_choice == computerChoiceChallengeMode:
        result = "It's a tie!"
        coins -= 10
    elif (user_choice == "Rock" and computerChoiceChallengeMode == "Scissors") or \
            (user_choice == "Paper" and computerChoiceChallengeMode == "Rock") or \
            (user_choice == "Scissors" and computerChoiceChallengeMode == "Paper"):
        result = "You win!"
        userScoreChallengeMode += 1
        coins += 10  # Increase coins by 10 for winning
    else:
        result = "Computer wins!"
        computerScoreChallengeMode += 1
        coins -= 10
    return result


@eel.expose
def computerChoiceChallenge():
    global computerChoiceChallengeMode
    return computerChoiceChallengeMode


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



# Streak Mode 
@eel.expose
def Streak_Mode(userChoise):
    global userScoreStreakMode, computerScoreStreakMode, history, computerChoiceStreakMode ,computer_score , userChoiceStreakMode , user_score

    choices = ["Rock", "Paper", "Scissors"]
    computerChoiceStreakMode = random.choice(choices)
    computerScoreStreakMode = computer_score
    userScoreStreakMode = user_score
    userChoiceStreakMode = userChoise


    if userChoise == computerChoiceStreakMode:
        result = "It's a tie!"
    elif (userChoise == "Rock" and computerChoiceStreakMode == "Scissors") or \
            (userChoise == "Paper" and computerChoiceStreakMode == "Rock") or \
            (userChoise == "Scissors" and computerChoiceStreakMode == "Paper"):
        result = "You win!"
        userScoreStreakMode += 1
    else :
        result = "computer win!"
        computerScoreStreakMode += 1


    history.append((userName, userChoise, computerChoiceStreakMode))



    for i, round_data in enumerate(history):
        userChoise = round_data[1]
        computerChoiceStreakMode = round_data[2]

    return result


@eel.expose
def userScoreStreak():
    global userScoreStreakMode
    return userScoreStreakMode


@eel.expose
def computerScoreStreak():
    global computerScoreStreakMode
    return computerScoreStreakMode


@eel.expose
def computerChoiceStreak():
    global computerChoiceStreakMode
    return computerChoiceStreakMode


@eel.expose
def userChoiceStreak():
    global userChoiceStreakMode
    return userChoiceStreakMode



# Arena Mode 
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



# Nine Cards Mode 
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
def userScoreNine():
    global  nine_user_score
    return  nine_user_score


@eel.expose
def computerScoreNine():
    global nine_computer_score
    return nine_computer_score


@eel.expose
def computerChoiceNine():
    global  nine_computer_choice
    return  nine_computer_choice



# Reverse Mode 
@eel.expose
def reversMode(userChoise):
    global user_score, computer_score, rounds, userScoreReverseMode , computerScoreReverseMode , computerChoiceReverseMode
    userScoreReverseMode = user_score
    computerScoreReverseMode = computer_score

    choices = ["Rock", "Paper", "Scissors"]
    computerChoiceReverseMode = random.choice(choices)

    if userChoise == computerChoiceReverseMode:
        result = "It's a tie!"
    elif (userChoise == "Rock" and computerChoiceReverseMode == "Scissors") or \
        (userChoise == "Paper" and computerChoiceReverseMode == "Rock") or \
        (userChoise == "Scissors" and computerChoiceReverseMode == "Paper"):
        result = "Computer wins!" 
        userScoreReverseMode += 1
    else:
        result = "You win!"
        computerScoreReverseMode += 1

    return result


@eel.expose
def userScoreReverse():
    global userScoreReverseMode
    return userScoreReverseMode


@eel.expose
def computerScoreReverse():
    global computerScoreReverseMode
    return computerScoreReverseMode


@eel.expose
def computerChoiceReverse():
    global computerChoiceReverseMode
    return computerChoiceReverseMode



# Set the window size and position
window_size = {'width': 1600, 'height': 900}  # Adjust the size as desired
chrome_flags = ['--window-size={},{}'.format(window_size['width'], window_size['height'])]

eel.start('start.html', mode='chrome', port=8000, cmdline_args=chrome_flags)
