(function() {
  // 1. Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
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
      font-family: 'Poppins', sans-serif;
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
      width: 320px;
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
      font-family: 'Poppins', sans-serif;
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
      padding: 0px 16px 16px 16px;
      background-color: #f9f9f9;
      font-family: 'Poppins', sans-serif;
    }
    .chatbox-body p {
      font-size: 14px;
      color: #444;
      margin-bottom: 16px;
    }
    .chatbox-buttons {
      display: flex;
      gap: 15px;
      padding-top: 10px;
    }
    .chatbox-button {
      flex: 1;
      text-align: center;
      padding: 10px;
      background: #0a1543;
      color: white;
      text-decoration: none;
      font-size: 14px;
    }
    .chatbox-button.secondary {
      background: linear-gradient(90deg, rgb(13,142,116) 0%, rgb(0,54,83) 100%);
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
  `;
  document.head.appendChild(style);

  // 2. Inject HTML
  const html = `
    <div id="chat-widget">
      <div id="chat-tooltip">Chat with us!</div>
      <img src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751544084577-CVBYGXST5BFMV2IX2D4D/SustainBuddy%2Blogo%2Btransparent.png" alt="Chat" />
    </div>
    <div id="intro-chatbox">
      <button id="minimize-chatbox">&times;</button>
      <div class="chatbox-header">
        <img src="https://images.squarespace-cdn.com/content/v1/6155b5bdada6ea1708c2c74d/1751606573741-P427HARG1DA38DZUMXHX/SustainBuddy%2Blogo%2Btransparent2.png" alt="SustainBuddy">
        <div>
          <div class="title">Sustainbuddy</div>
          <div class="subtitle">Your maritime sustainability partner</div>
        </div>
      </div>
      <div class="chatbox-body">
        <p>Hi there 👋<br>I'm here to help with sustainability tools, regulations, and solutions. Ready to explore?</p>
        <div class="chatbox-buttons">
          <a href="https://app.sustainbuddy.com/" target="_blank" class="chatbox-button">Start Chat</a>
          <a href="https://app.sustainbuddy.com/join" target="_blank" class="chatbox-button secondary">Join</a>
        </div>
      </div>
    </div>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  // 3. Add JS interactivity
  setTimeout(() => {
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
  }, 100);
})();
