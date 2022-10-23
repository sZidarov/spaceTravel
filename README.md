# spaceTravel

a function that describes a game.

The function recieves an input array with first element that represents string of the travel route to Titan, separated by "||". The first element of the string is the command, and the second is an integer.
The second element represents the starting amount of fuel.
The third - the starting amount of ammunition. 
The commands are as follow:
    "Travel" - the spaceship traveled the gicen distance. For every light-year traveled one point of fuel is consumed.
    - If the spaceship has enough fuel to travel the given distance function prints it.
    - If the fuel if not enough, the Mission is failed. The program stops.

    "Enemy" - the spaceship encounters an enemy and has the option to fight or run.
    - If the ammunition is enough, all the ammunitions needed are fired (one round for every point of enemy's armour.) and the function prints that the enemy was defeated.
    - If the ammunition is not enough, the spaceship should try to run, where for each enemy's armour point the spaceship consumes 2 fuel points. If the spaceship menager to run away the function prints a massage.
    - If fight or run is not possible, the Mission is failed. The program stops.

    "Repair" - the given amount of fuel is added to the spaceship's total fuel. For the ammunition, the given amount is multiplied by 2 and added to the ship's total ammunitions and the function prints what is added.

    "Titan" - the spaceship reaches Titan, the Mission is sucssess. The program stops.