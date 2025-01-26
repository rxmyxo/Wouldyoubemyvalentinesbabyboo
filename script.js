
function submitChoices() {
    const foodChoice = document.getElementById('food').value;
    const activityChoice = document.getElementById('activity').value;

    document.getElementById('foodResponse').innerText = `You want to eat: ${foodChoice}`;
    document.getElementById('activityResponse').innerText = `You want to: ${activityChoice}`;
}
