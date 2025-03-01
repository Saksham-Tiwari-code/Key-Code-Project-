console.log("JavaScript file loaded!"); // Debugging statement

const container = document.getElementById("key-container");

window.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key); // Debugging statement

    const key = e.key === " " ? "Space" : e.key; // Handle space key
    const code = e.code;
    const keyCode = e.keyCode;

    container.innerHTML = `
        <div class="key-container">
            <h4>Key</h4>
            <div class="key-content">${key}</div>
        </div>
        <div class="key-container">
            <h4>Code</h4>
            <div class="key-content">${code}</div>
        </div>
        <div class="key-container">
            <h4>Key Code</h4>
            <div class="key-content">${keyCode}</div>
        </div>
    `;
});