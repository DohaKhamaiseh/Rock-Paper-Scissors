import random
import cv2
import cvzone
from cvzone.HandTrackingModule import HandDetector
import time
import os

cap = cv2.VideoCapture(0)
cap.set(3, 640)
cap.set(4, 480)

detector = HandDetector(detectionCon=0.7, maxHands=1)

scores = [0, 0]  # [AI, Player]
currentT = 0
previousT = 0
timer = 0

stateResult = False
startGame = False

# Define the font and text color for the score and counter
font = cv2.FONT_HERSHEY_PLAIN
text_scale = 4
text_thickness = 6
text_color = (255, 255, 255)  # White color
green_color = (0, 255, 0)  # Green color
red_color = (0, 0, 255)  # Red color

def camStart():
    global cap, detector, timer, stateResult, startGame, scores, currentT, previousT

    while True:
        imgBG = cv2.imread(os.path.join("Cam", "Resources", "BG.png"))

        if imgBG is None:
            print("Error: Failed to read the image file.")
            break

        success, img = cap.read()

        imgScaled = cv2.resize(img, (0, 0), None, 0.875, 0.875)
        imgScaled = imgScaled[:, 80:480]

        # Find Hands
        hands, img = detector.findHands(imgScaled)  # with draw

        if startGame:
            if stateResult is False:
                timer = time.time() - initialTime
                cv2.putText(imgBG, str(int(timer)), (605, 435), font, text_scale, text_color, text_thickness)

                if timer > 3:
                    stateResult = True
                    timer = 0

                    if hands:
                        if len(hands) == 1:
                            playerMove = None
                            hand = hands[0]
                            fingers = detector.fingersUp(hand)
                            if fingers == [0, 0, 0, 0, 0]:
                                playerMove = 1
                            if fingers == [1, 1, 1, 1, 1]:
                                playerMove = 2
                            if fingers == [0, 1, 1, 0, 0]:
                                playerMove = 3

                            randomNumber = random.randint(1, 3)
                            imgAI = cv2.imread(os.path.join("Cam", "Resources", f"{randomNumber}.png"),
                                               cv2.IMREAD_UNCHANGED)
                            imgBG = cvzone.overlayPNG(imgBG, imgAI, (149, 310))

                            # Player Wins
                            if (playerMove == 1 and randomNumber == 3) or \
                                    (playerMove == 2 and randomNumber == 1) or \
                                    (playerMove == 3 and randomNumber == 2):
                                scores[1] += 1

                            # AI Wins
                            if (playerMove == 3 and randomNumber == 1) or \
                                    (playerMove == 1 and randomNumber == 2) or \
                                    (playerMove == 2 and randomNumber == 3):
                                scores[0] += 1

        imgBG[234:654, 795:1195] = imgScaled

        if stateResult:
            imgBG = cvzone.overlayPNG(imgBG, imgAI, (149, 310))

        score_text_width = cv2.getTextSize(str(scores[0]), font, text_scale, text_thickness)[0][0]
        cv2.putText(imgBG, str(scores[0]), (410 - score_text_width, 215), font, text_scale, text_color, text_thickness)
        cv2.putText(imgBG, str(scores[1]), (1112, 215), font, text_scale, text_color, text_thickness)

        if scores[1] == 5:
            cv2.rectangle(imgBG, (0, 0), (1280, 720), (0, 0, 0), cv2.FILLED)
            cv2.putText(imgBG, "YOU WON!", (290, 375), font, 7, green_color, 20)

        if scores[0] == 5:
            cv2.rectangle(imgBG, (0, 0), (1280, 720), (0, 0, 0), cv2.FILLED)
            cv2.putText(imgBG, "YOU LOST!", (290, 375), font, 7, red_color, 20)

        cv2.imshow("BG", imgBG)

        currentT = time.time()
        fps = 1 / (currentT - previousT)
        previousT = currentT

        cv2.putText(img, 'Client FPS:' + str(int(fps)), (10, 670), font, 4, text_color, text_thickness)

        key = cv2.waitKey(1)

        if key == ord(' '):
            startGame = True
            initialTime = time.time()
            stateResult = False

        if key == 27:  # Esc key
            break

    cap.release()
    cv2.destroyAllWindows()

# camStart()
