function updateQueueNumber() {
    let queueNumber = Math.floor(Math.random() * 500) + 1;
    let waitTimeMinutes = queueNumber * 0.5;
    let waitHours = Math.floor(waitTimeMinutes / 60);
    let waitMinutes = Math.floor(waitTimeMinutes % 60);
    let waitTimeText = waitHours >= 24 ? "24 小時以上" : `${waitHours} 小時 ${waitMinutes} 分鐘`;

    document.getElementById("queue-number").innerText = queueNumber;
    document.getElementById("queue-time").innerText = waitTimeText;
}
setInterval(updateQueueNumber, 5000);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            location.reload();
        });
    });
});