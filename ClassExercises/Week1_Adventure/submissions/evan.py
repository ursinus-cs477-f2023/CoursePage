#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  1 14:58:58 2023

@author: evantilton
"""


places2 = {}
places2["Forest"] = {"description":"There are trees here.","actions":{"Chop":"You cut down a tree. Now your arms are tired.","Wait":"The birds are chirping around you. It's very peaceful.","Travel":"You start walking."},"locations":["Cave","Lake"]}
places2["Cave"] = {"description":"It's dark here.","actions":{"Light torch":"You look around, but there's nothing in here but rocks.","Wait":"You hear a weird noise from deeper in the cave. Maybe you should leave soon.","Travel":"You start moving through the cave."},"locations":["Forest","The Deep"]}
places2["Lake"] = {"description":"The water is beautiful.","actions":{"Swim":"The water looked nice - but now you're cold and wet.","Catch fish":"You realize that you forgot your fishing rod.","Travel":"You start walking."},"locations":["Forest"]}
places2["The Deep"] = {"description":"You've gone very far into the cave now.\nYour light suddenly shines on a beautiful crystal! You grab it and prepare to leave, thinking of how rich you are now.\nBut suddenly, you hear a loud growl behind you.","actions":{"Run Away":"You don't think twice and sprint for the exit. Unfortunately, your foot catches a rock.\nThe cave bear eats you.","Fight":"You spin around, smacking the beast behind you with your torch. It runs away.\nYou quickly exit the cave, with your life and new gem intact.","Wait":"Seriously? You just stood there? You don't put up a fight at all, and the giant cave bear eats you. You are dead."}}
currentLoc = "Forest"
while not currentLoc == "dark cave":
    
    entry = places2[currentLoc]
    if currentLoc == "The Deep":
        
        currentLoc = "dark cave"
    actions = list(entry["actions"].keys())
    txt = "\nYou are alone in a {}. {} You can: {}, {}, or {}.\n".format(currentLoc,entry["description"],actions[0],actions[1],actions[2])
    print(txt)
    print('What will you do? _\n')
    inp = ""
    while not inp in entry["actions"]:
        
        inp = input()
    
    print("\n ~ " + entry["actions"][inp])
    if inp == "Travel":
 
        txt = "You can travel to: "
        for x in range(len(entry["locations"])):
            
            txt += entry["locations"][x] + ", " 
            
        print(txt)
        
        print('Where will you go? _\n')
        inp = input()
        if inp in entry["locations"]:
            
            currentLoc = inp
    
print("Congratulations! You finished the game.")
        