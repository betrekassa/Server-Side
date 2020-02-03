// Lottery Function
export function playLottery(user_choice) {
    let chance = Math.floor(Math.random() * 5);
    if (chance == user_choice) {
        return 0;//"You Win!!!";
    }
    else {
        return Math.abs(chance - user_choice);// "You LOSE"
    }
}