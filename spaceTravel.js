function spaceTravel (inputArray){
    let fuel = Number(inputArray[1]);
    let ammunition = Number (inputArray[2]);
    let scenario = inputArray[0];
    let scenarioArray = scenario.split('||');
    let scenarioArrayLength = scenarioArray.length;

    for (let i = 0; i<scenarioArrayLength; i++){
        let isStopped = false;
        let action = scenarioArray.shift();
        let actionArray = action.split(' ');
        let activity = actionArray[0];
        let activityScore = Number(actionArray[1]);

        switch (activity) {
            case "Travel":
                if (fuel>=activityScore){
                    console.log(`The spaceship travelled ${activityScore} light-years.`);
                    fuel -= activityScore;
                }else {
                    console.log("Mission failed.");
                    isStopped = true;
                }
                break;
            case "Enemy":
                if (ammunition>=activityScore){
                    console.log(`An enemy with ${activityScore} armour is defeated.`);
                    ammunition -= activityScore;
                }else if (fuel>=(activityScore*2)){
                    console.log(`An enemy with ${activityScore} armour is outmaneuvered.`);
                    fuel -= activityScore*2;
                }else {
                    console.log("Mission failed.");
                    isStopped = true;
                }
                break;
            case "Repair":
                fuel += activityScore;
                ammunition += activityScore*2
                console.log(`Ammunitions added: ${activityScore*2}.`);
                console.log(`Fuel added: ${activityScore}.`);
                break;
            case "Titan":
                console.log("You have reached Titan, all passengers are safe.");
                isStopped = true;
                break;
        }
        if (isStopped){
            break;
        }
    }
}
//spaceTravel ([
//    'Travel 10||Enemy 30||Repair 15||Titan',
//    '50',
//    '80'
//]);

spaceTravel ([
    'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'
]);