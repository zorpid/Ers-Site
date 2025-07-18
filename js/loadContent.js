fetch('content/homepage.md')
  .then(res => res.text())
  .then(markdown => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);

    // Hämta title från YAML front matter (första raden)
    const titleMatch = markdown.match(/title:\s*"(.*?)"/);
    const title = titleMatch ? titleMatch[1] : "ERS";

    document.getElementById('title').textContent = title;
    document.getElementById('content').innerHTML = html;
  });
