let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo <b> ${protocol}</b><br>`;
html += `HostName <b> ${hostname}</b><br>`;
html += `PathName <b> ${pathname}</b><br>`;
html += `href <b> ${href}</b><br>`;

document.writeln(html);

