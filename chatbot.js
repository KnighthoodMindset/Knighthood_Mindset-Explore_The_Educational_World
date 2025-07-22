document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatBotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.add("hidden");
    alert("Esita has been hidden.");
  });

  sendBtn.addEventListener("click", sendMessage);

  chatBotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});

function sendMessage() {
  const inputBox = document.getElementById("chatbot-input");
  const userMessage = inputBox.value.trim();
  if (userMessage) {
    appendMessage("user", userMessage);
    inputBox.value = "";
    getBotResponse(userMessage);
  }
}

function appendMessage(sender, message) {
  const messageContainer = document.getElementById("chatbot-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerHTML = renderMarkdown(message);
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|\n)\* (.+)/g, "$1• $2")
    .replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

async function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();

  // Esita name detection
  if (["what is your name", "your name", "who are you", "tell me your name"].some(q => lowerCaseMessage.includes(q))) {
    appendMessage("bot", "My name is Esita, your AI assistant 🤖");
    return;
  }

  if (lowerCaseMessage.includes("esita")) {
    appendMessage("bot", "Yes, I'm here! How can I help you? 😊");
    return;
  }

  const API_KEY = "AIzaSyAjs_EslA87gBY6R-s8YGi-8qq3QmLctJg"; // Replace with your actual key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.candidates || !data.candidates.length) {
      throw new Error("No response from Gemini API");
    }

    const botMessage = data.candidates[0].content.parts[0].text;
    appendMessage("bot", botMessage);
  } catch (error) {
    console.error("Error:", error);
    appendMessage("bot", "Sorry, I'm having trouble responding. Please try again.");
  }
}
