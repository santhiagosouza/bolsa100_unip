/**
 * Servidor HTTP Node.js para Landing Page Bolsa 100% UNIP EAD
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

// Configuração do MySQL com fallbacks para Acesso Externo e Interno (Easypanel)
const DB_CONFIG = {
  host: process.env.DB_HOST || '92.112.178.246',
  port: parseInt(process.env.DB_PORT || '445', 10),
  user: process.env.DB_USER || 'pos_unip',
  password: process.env.DB_PASSWORD || 'BD1515@',
  database: process.env.DB_NAME || 'pos_unip',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000
};

let pool;

async function initDb() {
  try {
    pool = mysql.createPool(DB_CONFIG);
    const connection = await pool.getConnection();
    console.log('✅ CONECTADO AO BANCO MYSQL:', DB_CONFIG.host + ':' + DB_CONFIG.port);
    connection.release();
  } catch (err) {
    console.error('⚠️ ALERTA DE CONEXÃO MYSQL:', err.message);
  }
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = req.url.split('?')[0];

  let safePath = path.normalize(decodeURIComponent(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  }
});

initDb().then(() => {
  server.listen(PORT, () => {
    console.log(`🚀 Servidor Bolsa 100% UNIP EAD rodando em http://localhost:${PORT}`);
  });
});
