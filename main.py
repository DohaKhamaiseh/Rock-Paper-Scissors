import eel 
# from sys import exit

eel.init('web')


# @eel.expose
# def exit_app():
#     eel._exiting = True
#     exit()




eel.start('index.html', port=8080)