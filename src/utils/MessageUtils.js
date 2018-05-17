const script = `
var wrapper = document.getElementById('height-wrapper');
var i = 0;
function updateHeight() {
    document.title = wrapper.clientHeight;
    window.location.hash = ++i;
}
updateHeight();
window.addEventListener('load', function() {
    updateHeight();
    setTimeout(updateHeight, 1000);
});
window.addEventListener('resize', updateHeight);
}());
`

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
      <div id="height-wrapper">
      ${content}
      </div>
      <script>
      ${script}
      </script>
	  </body>
    </html>
  `;
}