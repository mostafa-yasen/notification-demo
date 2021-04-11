let GAMES = [{
    name: "Name",
    author: "Yasin"
}, {
    name: "Age",
    author: "25"
}, {
    name: "Nationality",
    author: "Egyptian"
}];

document.addEventListener("DOMContentLoaded", function () {
    function randomNotification() {
        const randomItem = Math.floor(Math.random() * GAMES.length);
        const notifTitle = GAMES[randomItem].name;
        const notifBody = GAMES[randomItem].author;
        const options = {
            body: notifBody,
        };
        new Notification(notifTitle, options);
    }

    const button = document.getElementById('notifications');
    button.addEventListener('click', () => {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
                randomNotification();
            }
        });
    });
});
