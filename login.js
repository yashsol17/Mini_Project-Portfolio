function saveMessage(event) {
    event.preventDefault();

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    let data = {
        name: document.getElementById("input_name").value,
        email: document.getElementById("input_email").value,
        message: document.getElementById("input_msg").value,
        time: new Date().toLocaleString()
    };

    messages.push(data);
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message submitted!");
    event.target.reset();
}


function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if(user==="admin" && pass==="admin123"){
        window.location.href="admin.html";
    }
    else if(user !== "" && pass !== ""){
        window.location.href="home.html";
    }
    else{
        document.getElementById("error").innerText="Invalid username or password";
    }
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let container = document.getElementById("responseList");

    if (!container) return;

    if (messages.length === 0) {
        container.innerHTML = "<p>No responses found.</p>";
        return;
    }

    container.innerHTML = "";

    messages.forEach((msg, index) => {
        let div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";

        div.innerHTML = `
            <p><b>Name:</b> ${msg.name}</p>
            <p><b>Email:</b> ${msg.email}</p>
            <p><b>Message:</b> ${msg.message}</p>
            <p><b>Time:</b> ${msg.time}</p>
        `;

        container.appendChild(div);
    });
}


window.onload = function () {
    loadMessages();
};


function toggleTheme() {
    let html = document.documentElement;
    let current = html.getAttribute("data-theme");

    let newTheme = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
}

window.onload = function () {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    loadMessages && loadMessages();
};
