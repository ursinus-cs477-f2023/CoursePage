class MyState:
    def __init__(self, health):
        self.has_bomb = False
        self.health = health
        self.win = False
        self.state = "Console Room"
        
    def set_health(self, num):
        self.health = num
    
    def sub_health(self, num):
        self.health -= num

places = {}
places["Console Room"] = {"location":"The place where you fly the Tardis, you can travel to many places from here.", 
                    "neighbors":["Workshop", "Skaro", "Earth", "Mondas"]}
places["Workshop"] = {"location":"Your workshop with many trinkets and devices.",
                   "neighbors":["Console Room"]}
places["Earth"] = {"location":"The place where you live, a nice and (for now) peaceful planet.",
                   "neighbors":["Console Room","UNIT H.Q."]}
places["UNIT H.Q."] = {"location":"A base of a secret military goup, who are here to help.",
                   "neighbors":["Earth"]}
places["Skaro"] = {"location":"The irradiated war-torn home planet of the daleks!",
                   "neighbors":["Console Room"]}
places["Mondas"] = {"location":"The tenth planet and the twin of earth, as well as the home of the despicable Cybermen.",
                   "neighbors":["Console Room","Cyber Base"]}
places["Cyber Base"] = {"location":"The main base of the cybermen, if you have an anti-cyber bomb, you can destroy the cybermen and save earth.",
                   "neighbors":["Mondas"]}

game = MyState(4)

while game.health > 0 and game.win ==  False:
    print("\n\nYour current health is: " + str(game.health))
    print(places[game.state]["location"] + "\n")
    
    if game.state ==  "Skaro":
        print("You've been attacked by a Dalek! You have lost 3 health.\n")
        game.sub_health(3)
    if game.state ==  "Mondas":
        print("You've been attacked by a Cyberman! You have lost 1 health.\n")
        game.sub_health(1)
    if game.state ==  "UNIT H.Q.":
        game.set_health(4)
        print("Your health has been restored.\n")
    if game.state ==  "Cyber Base" and game.has_bomb ==  True:
        game.win = True
        break
    elif game.state ==  "Cyber Base" and game.has_bomb ==  False:
        print("You didn't have an anti-cyber bomb and have been attacked by Cybermen! You have lost 2 health.\n")
        game.sub_health(2)
    if game.state ==  "Workshop":
        game.has_bomb = True
        print("You pick up an anti-cyber bomb.\n")
    if game.health <= 0:
        break
    print("Neighbors:")
    print(places[game.state]["neighbors"])
    nxt = input("Where would you like to go?\n")
    if nxt not in places:
        nxt = input("Where would you like to go?\n")
    game.state = nxt
if game.win ==  True:
    print("You used the anti-cyber bomb to destroy the Cybermen and have saved earth!")
else:
    print("You have died!")
