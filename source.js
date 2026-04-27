(function() {
    'use strict';

    const hostName = window.location.hostname;
    const isGuidePage = hostName.includes('linkhuongdan.online') || hostName.includes('totreview.com');
    const isFinalPage = document.querySelector('input[name="_csrfToken"]') !== null;
    const directLinkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>Link\s*Gốc<\/a>/i;
    const hasDirectLink = document.body.innerHTML.match(directLinkRegex);

    if (!isGuidePage && !isFinalPage && !hasDirectLink && !hostName.includes('uptolink.one')) {
        return;
    }


    let customStyles = document.createElement('style');
    customStyles.innerHTML = `
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .lux-panel {
            position: fixed; bottom: 25px; right: 25px; width: 480px; height: 350px;
            background: linear-gradient(145deg, rgba(15,15,15,0.95), rgba(22,22,22,0.95));
            backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(200, 200, 200, 0.15); border-radius: 12px;
            z-index: 2147483647; box-shadow: 0 15px 40px rgba(0,0,0,0.9), 0 0 20px rgba(220, 220, 220, 0.05);
            display: flex; flex-direction: column; overflow: hidden;
            font-family: 'Segoe UI', system-ui, sans-serif;
            transition: height 0.3s ease;
        }
        .lux-header {
            background: linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(20,20,20,1) 100%);
            color: #f0f0f0; padding: 10px 15px; font-size: 13px; font-weight: 500;
            border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center;
            letter-spacing: 0.5px; user-select: none;
        }
        .lux-body { flex-grow: 1; padding: 12px 15px; overflow-y: auto; line-height: 1.6; font-size: 13px; transition: opacity 0.2s ease; }
        .lux-body::-webkit-scrollbar { width: 5px; }
        .lux-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
        .log-entry { animation: slideIn 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; margin-bottom: 6px; display: flex; align-items: flex-start; }
        .log-icon { margin-right: 8px; font-size: 14px; text-shadow: 0 0 5px rgba(255,255,255,0.3); }
        .log-text { color: #cccccc; font-family: 'Consolas', monospace; letter-spacing: 0.2px; }
        .lux-btn { background: none; border: none; color: #aaa; cursor: pointer; font-size: 16px; margin-left: 10px; transition: color 0.2s; padding: 0 5px;}
        .lux-btn:hover { color: #fff; }
    `;
    document.head.appendChild(customStyles);

    let consoleContainer = document.createElement('div');
    consoleContainer.className = 'lux-panel';
    let titleBar = document.createElement('div');
    titleBar.className = 'lux-header';
    titleBar.innerHTML = `
        <span><span style="color:#b0bec5;">✦</span> UPTOLINK BYPASS</span>
        <div style="display:flex; align-items:center;">
            <span style="color: #888; font-size: 11px; margin-right: 5px;">Owner: PhatNotTaken</span>
            <button id="lux-toggle-btn" class="lux-btn" title="Thu nhỏ / Phóng to">_</button>
        </div>
    `;
    consoleContainer.appendChild(titleBar);

    let logArea = document.createElement('div');
    logArea.className = 'lux-body';
    consoleContainer.appendChild(logArea);
    document.body.appendChild(consoleContainer);

    document.getElementById('lux-toggle-btn').addEventListener('click', function() {
        if (logArea.style.display === 'none') {
            logArea.style.display = 'block';
            consoleContainer.style.height = '350px';
            this.innerHTML = '_';
        } else {
            logArea.style.display = 'none';
            consoleContainer.style.height = '41px';
            this.innerHTML = '□';
        }
    });

    function logMsg(msg, type = "info") {
        let color = "#e0e0e0";
        let icon = "◈";
        if (type === "success") { color = "#00e676"; icon = "✔"; }
        if (type === "error") { color = "#ff1744"; icon = "✖"; }
        if (type === "warn") { color = "#ffea00"; icon = "⚠"; }
        if (type === "system") { color = "#00b0ff"; icon = "⚙"; }
        if (type === "ai") { color = "#e040fb"; icon = "✦"; }

        let newLine = document.createElement('div');
        newLine.className = 'log-entry';
        newLine.innerHTML = `<span class="log-icon" style="color:${color}">${icon}</span> <span class="log-text" style="color:${color}">${msg}</span>`;
        logArea.appendChild(newLine);
        logArea.scrollTop = logArea.scrollHeight;
    }

    setTimeout(() => {
        logMsg("Hệ thống đã khởi động và đang vào vị trí...", "system");
    }, 500);

    setTimeout(() => {
        logMsg("Đang kết nối với máy chủ quản lý...", "system");
    }, 1500);

    setTimeout(() => {
        logMsg("TỪ CHỐI KẾT NỐI: Hệ thống đang trong thời gian bảo trì!", "error");
    }, 2500);

    setTimeout(() => {
        logMsg("Script Auto Uptolink hiện đang tạm ngừng để cập nhật thuật toán Bypass mới nhất.", "warn");
    }, 3000);

    setTimeout(() => {
        logMsg("Vui lòng thực hiện thao tác thủ công (làm tay) trong thời gian này.", "ai");
    }, 3500);

    setTimeout(() => {
        logMsg("Tạm ngưng toàn bộ tiến trình tự động. Hẹn gặp lại sau!", "system");

        let btns = document.querySelectorAll('#invisibleCaptchaShortlink, button[type="submit"], .btn-captcha');
        btns.forEach(b => {
            b.style.opacity = '1';
            b.style.pointerEvents = 'auto';
            if (b.innerText.includes("đừng nhấn")) {
                b.innerText = "Click here to continue";
            }
        });
    }, 4500);

})();
