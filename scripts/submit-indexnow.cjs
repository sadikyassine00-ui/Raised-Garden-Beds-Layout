const https = require('https');

const KEY = 'c09e2628140aadefc6f0836bd909f874';
const HOST = 'raisedgardenbedslayout.com';

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: [
    `https://${HOST}/`,
    `https://${HOST}/terms`,
    `https://${HOST}/privacy`,
    `https://${HOST}/refund`,
  ],
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      console.log(`IndexNow response code: ${res.statusCode} ${res.statusMessage}`);
      if (data) console.log(`Response body: ${data}`);
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log('Successfully submitted URLs to IndexNow!');
      } else {
        console.warn('IndexNow returned status:', res.statusCode);
      }
    });
  }
);

req.on('error', (err) => {
  console.error('Failed to submit to IndexNow:', err.message);
});

req.write(payload);
req.end();
