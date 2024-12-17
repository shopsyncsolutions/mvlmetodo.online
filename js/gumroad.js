{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-f8f9015a9aabefa09736.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-86f2b5bd.css" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "https://assets.gumroad.com/packs/css/design-a394da1f.css";
}
