window.addEventListener("load", () => {

setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
}, 3000);

});

const generateBtn = document.getElementById("generateBtn");
const promptBox = document.getElementById("prompt");
const codeOutput = document.getElementById("codeOutput");
const previewFrame = document.getElementById("previewFrame");

generateBtn.addEventListener("click", () => {

const prompt = promptBox.value.toLowerCase();

if(prompt.includes("html") || prompt.includes("website")){

    const htmlCode = `<!DOCTYPE html>

<html>
<head>
<title>VEXOR WEBSITE</title>
<style>
body{
font-family:Arial;
background:black;
color:gold;
text-align:center;
padding-top:100px;
}
</style>
</head>
<body><h1>Welcome To VEXOR AI</h1>
<p>Generated Website</p></body>
</html>`;    codeOutput.textContent = htmlCode;
    previewFrame.srcdoc = htmlCode;

}

else if(prompt.includes("python")){

    const pyCode = `print("Welcome To VEXOR AI")

for i in range(5):
print("Hello World")`;

    codeOutput.textContent = pyCode;
}

else if(prompt.includes("javascript")){

    const jsCode = `function hello(){

console.log("Welcome To VEXOR AI");

}

hello();`;

    codeOutput.textContent = jsCode;
}

else{

    codeOutput.textContent =

`VEXOR AI READY

Try:

Create HTML Website

Python Login System

JavaScript Calculator

Portfolio Website`;
}

});

const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", () => {

const msg = chatInput.value.trim();

if(msg === "") return;

const userMsg = document.createElement("div");

userMsg.style.background = "#333";
userMsg.style.padding = "10px";
userMsg.style.margin = "10px";
userMsg.style.borderRadius = "10px";

userMsg.innerText = msg;

chatBox.appendChild(userMsg);

chatInput.value = "";

setTimeout(() => {

    const aiMsg = document.createElement("div");

    aiMsg.className = "ai-message";

    aiMsg.innerText =
    "VEXOR AI: I received your message -> " + msg;

    chatBox.appendChild(aiMsg);

    chatBox.scrollTop = chatBox.scrollHeight;

}, 1000);

});

document.querySelectorAll(".deploy-btn")[0]
.addEventListener("click", () => {

alert(
"GitHub deployment system will be connected later."
);

});

document.querySelectorAll(".deploy-btn")[1]
.addEventListener("click", () => {

alert(
"Vercel deployment system will be connected later."
);

});
