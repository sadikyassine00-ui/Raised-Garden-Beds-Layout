const https = require('https');

const KEY = 'c09e2628140aadefc6f0836bd909f874';
const HOSTS = ['raisedgardenbedslayout.com', 'www.raisedgardenbedslayout.com'];

function submitHost(host) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host,
      key: KEY,
      keyLocation: `https://${host}/${KEY}.txt`,
      urlList: [
        `https://${host}/`,
        `https://${host}/terms`,
        `https://${host}/privacy`,
        `https://${host}/refund`,
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
          console.log(`[${host}] IndexNow status: ${res.statusCode} ${res.statusMessage}`);
          if (data) console.log(`[${host}] Body: ${data}`);
          resolve(res.statusCode);
        });
      }
    );

    req.on('error', (err) => {
      console.error(`[${host}] Error:`, err.message);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  for (const host of HOSTS) {
    try {
      await submitHost(host);
    } catch (e) {
      // ignore individual failure
    }
  }
}

main();
