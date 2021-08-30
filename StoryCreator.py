#This code creates a story,your story.
#good practice for strings, variables & concatenation
loop = 1
while (loop < 10):
    noun=input("choose a noun: ")
    p_noun = input("choose a plural noun: ")
    noun2 = input("choose a noun: ")
    place = input("name the place ")
    adjective = input("choose an adjective: ")
    noun3 = input("choose a noun: ")

    #this displays the generated story based
    #on the person's input
    print("--------------------")
    print("Be kind to your",noun,p_noun)
    print("For a bird may be somebody's ",noun2,",")
    print("Be kind to your",p_noun,"in",place)
    print("Where the weather is always",adjective,".")
    print()
    print("You may think that this is the",noun3,",")
    print("Well... it is.")
    print("--------------------")
    loop = loop+1
