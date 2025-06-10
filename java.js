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

let queueNumber = Math.floor(Math.random() * 500) + 1;

function updateQueueNumber() {
    if (queueNumber > 0) {
        queueNumber -= Math.floor(Math.random() * 5);
    }
    let waitTimeMinutes = queueNumber * 0.5;
    let waitHours = Math.floor(waitTimeMinutes / 60);
    let waitMinutes = Math.floor(waitTimeMinutes % 60);
    let waitTimeText = waitHours >= 24 ? "24 小時以上" : `${waitHours} 小時 ${waitMinutes} 分鐘`;

    document.getElementById("queue-number").innerText = queueNumber;
    document.getElementById("queue-time").innerText = waitTimeText;
}

// 初始顯示哪個畫面
function initializePage() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("main-container").classList.add("hidden");
        document.getElementById("otp-container").classList.remove("hidden");
    } else {
        updateQueueNumber();
        setInterval(updateQueueNumber, 5000);
    }
}

// 模擬登入進入 OTP 驗證畫面
function simulateLogin() {
    localStorage.setItem("loggedIn", "true");
    document.getElementById("main-container").classList.add("shake");
    setTimeout(() => {
        document.getElementById("main-container").classList.add("hidden");
        document.getElementById("otp-container").classList.remove("hidden");
    }, 500);
}

// 檢查 OTP 是否正確
function checkOTP() {
    const otpInput = document.getElementById("otp-input");
    const otpError = document.getElementById("otp-error");
    if (otpInput.value === "1234") {
        alert("驗證成功！歡迎進入系統！");
        otpInput.classList.remove("error");
        otpError.style.display = "none";
    } else {
        otpInput.classList.add("error");
        otpError.style.display = "block";
    }
}

// 模擬登入錯誤動畫
function triggerLoginError() {
    const container = document.getElementById("main-container");
    container.classList.add("shake");
    setTimeout(() => container.classList.remove("shake"), 500);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            location.reload();
        });
    });
});