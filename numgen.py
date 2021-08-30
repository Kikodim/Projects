#guessing game with numbers

import random
attempts_list=[]
def score():
    if len(attempts_list)<=0:
        print("There is currently no high score, try your luck now!")
    else:
        print("The current high score is {} attempts".format(min(attempts_list)))

def start_game():
    random_number = int(random.randint(1,10))
    print("Hello traveler! Welcome to the guessing game!")
    player_name=input("Input name: ")
    wanna_play=input("Hello, {} would you like to play a game? (Enter yes/no )".format(player_name))
    attempts=0
    score()
    while wanna_play.lower()=="yes":
        try:
            guess = input("Pick a number between 1 and 10 ")
            if int(guess)<1 or int(guess)>10:
                raise ValueError("Please guess a number within the given range")
            if int(guess)==random_number:
                print("Nice! You got it!")
                attempts += 1
                attempts_list.append(attempts)
                print("It took you {} attempts".format(attempts))
                play_again=input("Would you like to play again? (Enter yes/no)")

                attempts=0
                score()
                random_number=int(random.randint(1,10))
                if play_again.lower()=="no":
                    print("Okay,see you soon!")
                    break
                elif int(guess)>random_number:
                    print("it's lower")
                    attempts +=1
                elif int(guess)>random_number:
                    print("It's higher")
                    attempts+=1
        except ValueError as err:
            print("That's not a valid value. Try again...")
            print("({})".format(err))
    else:
        print("Okay, see you soon!")
if __name__ == '__main__':
    start_game()


