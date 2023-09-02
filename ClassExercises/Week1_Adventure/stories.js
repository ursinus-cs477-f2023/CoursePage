let stories = {};
let places = {};

places = {};
places["Vault 111"] = {"description":"After the start of the nuclear war in 2077, you and your family escaped here to live until the surface was safe. Little did you know, Vault-Tec would have you all cryogenically frozen as an experiment...", "next":["Sanctuary"]};

places["Sanctuary"] = {"description":"Now the year 2287, you find the neighborhood you used to live in before the war, along with your old robot Codsworth. Most of the houses are leveled, but there is potential to start rebuilding here.",
                       "next":["Vault 111", "Red Rocket", "Concord"]};

places["Red Rocket"] = {"description":"The old gas station down the road from your home. Here you find a lonely dog, eager for new companionship. You decide to bring him along for the journey.",
                        "next":["Sanctuary", "Concord"]};

places["Concord"] = {"description":"A larger town past Red Rocket, you find a group of survivors pinned down in the museum by Raiders.", 
                     "next":["Museum", "Red Rocket", "Sanctuary", "Diamond City"]};

places["Museum"] = {"description":"In the museum, you help fight off the Raiders and save the survivors. You find out that they are the last of the Minutemen, a group dedicated to helping out other settlers in the wastland. They offer to help rebuild Sanctuary.",
                     "next":["Concord"]};

places["Diamond City"] = {"description":"You made it to Diamond City, the 'Great Green Jewel' of the Commonwealth. Inside the old baseball stadium, you find a bustling town full of vendors, residents, and new opportunities.\nThis is where the real adventure will begin...", "next":[]};

places["start"] = "Vault 111";
places["end"] = "Diamond City";

stories["Brenden"] = places;












places = {};

places["Bedroom"] = {"description":"This is the place where you sleep at night and hang out with your friends during the day.", "next":["Bathroom", "Cassie & June's Room", "Maya & Emily's Room", "Bed"]}
places["Bathroom"] = {"description":"This is the place where you start your day by brushing your teeth or taking a shower.", "next":["Wismer", "Olin 108"]}
places["Maya & Emily's Room"] = {"description":"This is the place where you occasionally go when someone needs something.", "next":["Cassie & June's Room", "Wismer", "Bedroom"]}
places["Cassie & June's Room"] = {"description":"This is the place where you go to play danganrompa and zelda.", "next":["Bedroom", "Pfahler 107", "Wismer"]}
places["Wismer"] = {"description":"This is the place where you go for your meals.", "next":["Upper", "Lower"]}
places["Upper"] = {"description":"This is the place you go for buffet style food and to hang out with friends.", "next":["Bedroom", "Pfahler 107", "Library", "Kaleidoscope 215"]}
places["Lower"] = {"description":"This is the place you go when you want a burger from the grill.", "next":["Bedroom", "Pfahler 107", "Kaleidoscope 215", "Library"]}
places["Library"] = {"description":"This is the place where you go to do work with friends.", "next":["Kaleidoscope 215", "Pfahler 107", "Bedroom"]}
places["Pfahler 107"] = {"description":"This is the place you go for CS 477.", "next":["Bedroom", "Cassie & June's Room"]}
places["Kaleidoscope 215"] = {"description":"This is the place you go for THEA 100.", "next":["Thomas 324"]}
places["Thomas 324"] = {"description":"This is the place where you go for PSYCH 100.", "next":["Bedroom", "Cassie & June's Room"]}
places["Olin 108"] = {"description":"This is the place where you go for CS 271.", "next":["Wismer", "Bedroom"]}
places["Bed"] = {"description":"This is the place you go to sleep at night.", "next":[]}
places["start"] = "Bedroom";
places["end"] = "Bed";

stories["Emily"] = places;









places = {};


let forest_description = "You wake up in an old growth forest, you find the faint glow of the sun to be warming. There's not much around but you notice a well worn path."
let path1_description = "As you walk down the path, other than a lot of trees, flowers, and weeds, you spot a small cottage along the path."
let cottage_description = "The door is unlocked and it's a normal little cottage and you see the oven on. You notice a staircase that goes up. Also, you see a picture frame with a cute little family."
let upstairs_description = "As you round the corner on the stair case, the father jumps out and says \"Who are you, how did you get in?\". He charges at you, and with your quick thinking you see a window."
let jump_description = "You jump through the window, breaking it in the process and all you hear from the cottage is \"You better get back here!\""
let fork_description = "You continue to walk down the path, you notice a slight incline to it. Soon you get a fork in the path."
let left_description = "As you walk down the path, the trees grow younger and you see more sunlight. You near the city where you live, you must have fell asleep in the woods again."
let right_description = "The path gets darker and you turn a corner and see a massive castle, one where you don't think you should go inside."
let castle_descritption = "The castle is locked, you have to turn around."


places["hidden"] = {"description":"You found the hidden easter egg, you win nothing. You broke the game :(", "next":[]};
places["end"] = "hidden";
places["start"] = "wake up";

places["wake up"] = {"description":forest_description, "next":["path"]};
places["path"] = {"description":path1_description, "next":["cottage", "fork", "wake up"]};
places["cottage"] = {"description":cottage_description, "next":["path", "upstairs"]};
places["upstairs"] = {"description":upstairs_description, "next":["jump"]};
places["jump"] = {"description":jump_description, "next":["path"]};
places["fork"] = {"description":fork_description, "next":["left", "right", "path"]};
places["left"] = {"description":left_description, "next":[]};
places["right"] = {"description":right_description, "next":["castle", "fork"]};
places["castle"] = {"description":castle_descritption, "next":["right"]};

stories["Henry"] = places;




places = {
    "Kitchen":{"description":"Dirty dishes overflow the sink. You should get on that soon","next":[ "Living Room", "Office"]},
    "Office":{"description":"The place where watching YouTube is done","next":[ "Kitchen", "Hallway"]},
    "Living Room":{"description":"This is the domain of the cats. No humans allowed", "next":["Kitchen", "Hallway", "Basement Hallway"]},
    "Hallway":{"description":"Shelves of DVDs line the walls, never to be played again","next":[ "Living Room", "Office", "Upstairs Hallway"]},
    "Upstairs Hallway":{"description":"You begin to sweat because the second floor is 90 degrees","next":[ "Hallway", "Attic"]},
    "Attic":{"description":"Beware of the creatures that hide in the dark","next":[ "Upstairs Hallway"]},
    "Basement Hallway":{"description":"A single light illuminates the darkness", "next":["Gaming Room", "Living Room"]},
    "Gaming Room":{"description":"An inescapable cave.", "next":["Basement Hallway"]},
    "start":"Kitchen",
    "end":"Gaming Room"
}

stories["Josh"] = places;




places = {}
places["bed"] = {"description":"Time for bed","next":["carpet"]};
places["carpet"] = {"description":"Stand around like you don't know what to do","next":["bed","desk","workstation","fridge","roommatesside"]};
places["desk"] = {"description":"Do some studying","next":["carpet"]};
places["workstation"] = {"description":"Fiddle around on an instrument or do art","next":["carpet"]};
places["fridge"] = {"description":"Make some tea or look for something you don't really want to eat", "next":["carpet"]};
places["roommatesside"] = {"description":"Interlope across your roommate's side of the room","next":["carpet","door"]};
places["door"] = {"description":"The door doesn't have a working latch.","next":["roommatesside","hall"]};
places["hall"] = {"description":"Are you coming or going? oooo its a LiMiNaL sPaCe","next":["door","bathroom","END"]};
places["bathroom"] = {"description":"Shower or get off the pot","next":["hall"]};
places["START"] = {"description":"Welcome home","next":["hall"]};
places["END"] = {"description":"Great job fending for yourself in there. You didn't forget anything, did you?", "next":[]};

places["start"] = "START";
places["end"] = "END";

stories["Adrian"] = places;




const adventureMenu = document.getElementById("adventureMenu");
const nextMenu = document.getElementById("nextMenu");
function setupMenu() {
    // Step 1: Setup note number chooser
    for (let team in stories) {
        const option = document.createElement("Option");
        option.setAttribute("value", team);
        option.innerHTML = team;
        adventureMenu.appendChild(option);
    }
}
const locationTxt = document.getElementById("location");
const descriptionTxt = document.getElementById("description");


function populateState() {
    if (state in story) {
        locationTxt.innerHTML = state;
        descriptionTxt.innerHTML = story[state].description;
        nextMenu.innerHTML = "";
        for (let i = 0; i < story[state].next.length; i++) {
            const option = document.createElement("Option");
            const place = story[state].next[i];
            option.setAttribute("value", place);
            option.innerHTML = place;
            nextMenu.appendChild(option);
        }
    }
}

function goToNext() {
    state = nextMenu.value;
    if (state == story.end) {
        alert("You made it!");
        locationTxt.innerHTML = state;
        descriptionTxt.innerHTML = story[state].description;
        nextMenu.innerHTML = "";
    }
    else {
        populateState();
    }
}

function startStory() {
    story = stories[adventureMenu.value];
    state = story.start;
    populateState();
}


setupMenu();
let story = {};
let state = "";
