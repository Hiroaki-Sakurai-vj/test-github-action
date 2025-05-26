// パターン2: セキュリティ問題
javascript// セキュリティ的に問題のあるコード
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // SQLインジェクション脆弱性
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    
    // XSS脆弱性
    res.send(`<h1>ユーザー: ${req.query.name}</h1>`);
});
