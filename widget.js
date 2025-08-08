(function () {
  // Inject stylesheet
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
  document.head.appendChild(style);

  // Inject CSS
  const css = document.createElement("style");
  css.textContent = `#chat-widget {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 60px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 3px 8px 9px rgba(0, 0, 0, 1.1);
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  #chat-widget:hover {
    transform: scale(1.1);
  }

  #chat-widget img {
    height: 80px;
  }

  #chat-tooltip {
    position: absolute;
    bottom: 145%;
    right: -24px;
    background-color: #333;
    color: #fff;
    padding: 8px 14px;
    border-radius: 16px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 1001;
  }

  #chat-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 22px;
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
    box-shadow: 6px -3px 0 0 #333;
  }

  #intro-chatbox {
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 360px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    font-family: sans-serif;
    z-index: 1001;
    display: none;
    overflow: hidden;
  }

  .chatbox-header {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    background-color: #0a1543;
  }

  .chatbox-header img {
    height: 40px;
    border-radius: 8px;
    margin-right: 12px;
  }

  .chatbox-header .title {
    font-weight: bold;
    font-size: 16px;
    color: #fff;
  }

  .chatbox-header .subtitle {
    font-size: 12px;
    color: #d8d9e5;
  }

  .chatbox-body {
    padding: 10px 5px 10px 5px;
    background-color: #f9f9f9;
  }

  #chat-messages {
    height: 350px;
    overflow-y: auto;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .chat-message {
    display: flex;
    align-items: flex-end;
    max-width: 100%;
  }

  .chat-message.user {
    flex-direction: row-reverse;
    margin-left: 40px;
  }

  .chat-message.bot {
    justify-content: flex-start;
    margin-right: 40px;
  }

  .chat-message .avatar {
    height: 28px;
    width: 28px;
    border-radius: 50%;
    margin: 0 8px;
  }

  .message-bubble {
    max-width: 75%;
    padding: 10px 14px;
    border-radius: 16px;
    line-height: 1.4;
    font-size: 14px;
    position: relative;
    word-wrap: break-word;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .chat-message.user .message-bubble {
    background-color: #0a1543;
    color: white;
    border-bottom-right-radius: 4px;
  }

  .chat-message.bot .message-bubble {
    background-color: #f1f2f5;
    color: #000;
    border-bottom-left-radius: 4px;
  }

  .chatbox-input {
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    padding: 8px;
    background-color: white;
  }

  .chatbox-input input {
    flex: 1;
    border: none;
    font-size: 14px;
    outline: none;
    padding: 10px 0;
    background-color: transparent;
  }

  .chatbox-input input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  .chatbox-input input::placeholder {
    color: #aaa;
  }

  .chatbox-input button {
    background: none;
    border: none;
    padding: 0 8px;
    cursor: pointer;
  }

  .send-icon {
    font-family: 'Material Symbols Outlined';
    font-size: 24px;
    color: #0a1543;
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }

  #minimize-chatbox {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  .typing-dots {
    display: flex;
    align-items: center;
    height: 24px;
    gap: 4px;
    margin-left: 5px;
  }

  .typing-dots span {
    width: 6px;
    height: 6px;
    background-color: #888;
    border-radius: 50%;
    display: inline-block;
    animation: typingBounce 1.2s infinite ease-in-out;
  }

  .typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typingBounce {

    0%,
    80%,
    100% {
      transform: scale(0.8);
      opacity: 0.5;
    }

    40% {
      transform: scale(1.2);
      opacity: 1;
    }
  }`;
  document.head.appendChild(css);

  // Inject HTML
  const html = `
    <div id="chat-widget">
      <div id="chat-tooltip">Chat with us!</div>
      <img src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751544084577-CVBYGXST5BFMV2IX2D4D/SustainBuddy%2Blogo%2Btransparent.png" alt="Chat" />
    </div>
    <div id="intro-chatbox">
      <button id="minimize-chatbox">&times;</button>
      <div class="chatbox-header">
        <img src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" alt="SustainBuddy" />
        <div>
          <div class="title">Sustainbuddy</div>
          <div class="subtitle">Your maritime sustainability partner</div>
        </div>
      </div>
      <div class="chatbox-body">
        <div id="chat-messages">
          <div class="chat-message bot">
            <img class="avatar" src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" />
            <div class="message-bubble">Hi there 👋 I'm here to help with sustainability tools, regulations, and solutions. Ask me anything.</div>
          </div>
        </div>
        <div class="chatbox-input">
          <input type="text" id="userMessage" placeholder="Type your message..." />
          <button id="sendButton">
            <span class="material-symbols-outlined send-icon">send</span>
          </button>
        </div>
      </div>
    </div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // Widget logic
  const chatWidget = document.getElementById("chat-widget");
  const introChatbox = document.getElementById("intro-chatbox");
  const minimizeBtn = document.getElementById("minimize-chatbox");

  chatWidget.addEventListener("click", () => {
    chatWidget.style.display = "none";
    introChatbox.style.display = "block";
  });

  minimizeBtn.addEventListener("click", () => {
    introChatbox.style.display = "none";
    chatWidget.style.display = "flex";
  });

  class SustainBuddyClient {
    constructor(apiUrl = 'https://api.sustainbuddy.ai') {
      this.apiUrl = apiUrl;
      this.currentResponseId = null;
    }

    async sendMessage(message) {
      const payload = { message };
      if (this.currentResponseId) {
        payload.previous_response_id = this.currentResponseId;
      }

      const response = await fetch(`${this.apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (data.success) {
        this.currentResponseId = data.response_id;
        return data.response;
      } else {
        throw new Error(data.error);
      }
    }

    newConversation() {
      this.currentResponseId = null;
    }
  }

  const client = new SustainBuddyClient();

  async function handleChat() {
    function formatAnswer(answer) {
  function escapeHtml(html) {
    return html.replace(/[&<>"']/g, function (ch) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[ch];
    });
  }

  function parseMarkdown(md) {
    // Escape HTML
    md = escapeHtml(md);

    // Replace headers
    md = md
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Bold and italics
    md = md
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Replace list items
    md = md.replace(/^[-*+] (.+)$/gm, '<li>$1</li>');

    // Wrap <li> blocks in <ul>
    md = md.replace(/(<li>[\s\S]+?<\/li>)/g, function (match) {
      // Only wrap if not already inside a <ul>
      if (!/^<ul>/.test(match)) {
        return '<ul>' + match + '</ul>';
      }
      return match;
    });

    // Add <p> around standalone paragraphs (excluding headings and lists)
    md = md.replace(/^(?!<h\d>|<ul>|<li>|<strong>|<em>)(.+)$/gm, '<p>$1</p>');

    return md;
  }

  return parseMarkdown(answer);
}


    const input = document.getElementById("userMessage");
    const messagesDiv = document.getElementById("chat-messages");
    const message = input.value.trim();
    if (!message) return;

    const userMsg = document.createElement("div");
    userMsg.classList.add("chat-message", "user");
    userMsg.innerHTML = `
      <img class="avatar" src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
      <div class="message-bubble">${message}</div>`;
    messagesDiv.appendChild(userMsg);
    input.value = '';

    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.classList.add("chat-message", "bot");
    typingDiv.innerHTML = `
      <img class="avatar" src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" />
      <div class="message-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
    messagesDiv.appendChild(typingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    try {
      const response = await client.sendMessage(message);
      typingDiv.remove();

      const botMsg = document.createElement("div");
      botMsg.classList.add("chat-message", "bot");
      botMsg.innerHTML = `
        <img class="avatar" src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" />
        <div class="message-bubble">${formatAnswer(response.answer)}</div>`;
      messagesDiv.appendChild(botMsg);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    } catch (err) {
      typingDiv.remove();
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("chat-message", "bot");
      errorMsg.innerHTML = `
        <img class="avatar" src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" />
        <div class="message-bubble" style="color:red;">Error: ${err.message}</div>`;
      messagesDiv.appendChild(errorMsg);
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id === "sendButton") {
      handleChat();
    }
  });

  document.addEventListener("keypress", function (e) {
    if (e.target.id === "userMessage" && e.key === "Enter") {
      e.preventDefault();
      handleChat();
    }
  });
})();


