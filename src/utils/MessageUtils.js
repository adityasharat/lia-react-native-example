const script = `
var i = 1;
window.location.hash = i;
var wrapper = document.createElement("div");
wrapper.id = "height-wrapper";
while (document.body.firstChild) {
  wrapper.appendChild(document.body.firstChild);
}
document.body.appendChild(wrapper);
function updateHeight() {
  document.title = wrapper.clientHeight;
  window.location.hash = ++i;
}
window.addEventListener('load', function() {
    updateHeight();
});
window.addEventListener('resize', updateHeight);
`;

export function wrapInHtml(content) {
  return `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body, html, #height-wrapper { background: transparent }
        a { text-decoration:none }
        table { width:100%% !important; max-width:100%%; }
        table td { width:100%% !important; max-width:100%%; }
        #height-wrapper { position: absolute; top: 0; left: 0; right: 0; font-size: 1em; line-height: 1.500em; }
        iframe { outline: 0; max-width: 100%%; height: auto;}
        img { outline: 0; max-width: 100%; height: auto; }
      </style>
    </head>
    <body>
      ${content}
      <script>
      ${script}
      </script>
	  </body>
    </html>
  `;
}