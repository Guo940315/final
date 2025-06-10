let queueNumber = Math.floor(Math.random() * 500) + 1;
let progress = 0;

function updateQueueNumber() {
    if (queueNumber > 0) {
        queueNumber -= Math.floor(Math.random() * 5);
        queueNumber = Math.max(queueNumber, 0);
    }

    let waitTimeMinutes = queueNumber * 0.5;
    let waitHours = Math.floor(waitTimeMinutes / 60);
    let waitMinutes = Math.floor(waitTimeMinutes % 60);
    let waitTimeText = waitHours >= 24 ? "24 小時以上" : `${waitHours} 小時 ${waitMinutes} 分鐘`;

    document.getElementById("queue-number").innerText = queueNumber;
    document.getElementById("queue-time").innerText = waitTimeText;

    // 進度條模擬
    progress = Math.min(progress + Math.random() * 5, 100);
    document.getElementById("progress-fill").style.width = `${progress}%`;
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

// 初始顯示哪個畫面
function initializePage() {
    if (localStorage.getItem("step") === "otp") {
        showOTPPage();
    } else if (localStorage.getItem("step") === "dashboard") {
        showDashboard();
    } else {
        updateQueueNumber();
        // 移除重複的 setInterval
    }
}

// 模擬登入進入 OTP 驗證畫面
function simulateLogin() {
    localStorage.setItem("step", "otp");
    document.getElementById("main-container").classList.add("shake");
    setTimeout(() => {
        showOTPPage();
    }, 500);
}

function showOTPPage() {
    hideAll();
    document.getElementById("otp-container").classList.remove("hidden");
}

function showDashboard() {
    hideAll();
    document.getElementById("dashboard-container").classList.remove("hidden");
}

function checkOTP() {
    const otpInput = document.getElementById("otp-input");
    const otpError = document.getElementById("otp-error");
    if (!/^\d{4}$/.test(otpInput.value)) {
        otpError.textContent = "格式錯誤，請輸入 4 位數字";
        otpError.style.display = "block";
        otpInput.classList.add("error");
        return;
    }

    if (otpInput.value === "1234") {
        otpError.style.display = "none";
        otpInput.classList.remove("error");
        localStorage.setItem("step", "dashboard");
        showDashboard();
    } else {
        otpError.textContent = "驗證失敗，請再試一次。";
        otpError.style.display = "block";
        otpInput.classList.add("error");
    }
}

function logout() {
    localStorage.removeItem("step");
    location.reload();
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

    // 移除重複的進度條建立邏輯
});

function showTransactions() {
    hideAll();
    document.getElementById("transactions-container").classList.remove("hidden");
}

function showProfile() {
    hideAll();
    document.getElementById("profile-container").classList.remove("hidden");
}

function hideAll() {
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("otp-container").classList.add("hidden");
    document.getElementById("dashboard-container").classList.add("hidden");
    document.getElementById("transactions-container").classList.add("hidden");
    document.getElementById("profile-container").classList.add("hidden");
}

window.addEventListener("beforeunload", function () {
    localStorage.removeItem("step");
});