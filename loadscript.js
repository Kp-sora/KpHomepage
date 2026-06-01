// header読み込み
fetch("common.html")
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const header = doc.querySelector(".header");

    if (header) {
      document.getElementById("header").innerHTML = header.outerHTML;
    }
  });

// footer読み込み
fetch("common.html")
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    const footer = doc.querySelector(".footer");

    if (footer) {
      document.getElementById("footer").innerHTML = footer.outerHTML;
    }
  });