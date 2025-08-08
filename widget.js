(function () {
  // 1. Inject Google Fonts
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
  document.head.appendChild(fontLink);

  // 2. Inject CSS Styles
  const style = document.createElement("style");
  style.innerHTML = `/* Entire CSS from your original snippet */
  #chat-widget {
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
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
  `;
  document.head.appendChild(style);

  // 3. Inject HTML Elements
  const html = `<!-- trimmed for brevity -->`;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  // 4. Inject Functional JS
  const js = `// trimmed for brevity`;
  const behaviorScript = document.createElement("script");
  behaviorScript.innerHTML = js;
  document.body.appendChild(behaviorScript);
})();
