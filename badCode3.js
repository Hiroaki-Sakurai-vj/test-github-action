// パターン3: 複雑度問題
javascript// 複雑すぎる関数
function processUserData(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            if (users[i].status === 'active') {
                if (users[i].type === 'premium') {
                    if (users[i].country === 'Japan') {
                        if (users[i].emailVerified) {
                            // 深すぎるネスト
                            users[i].canAccess = true;
                        }
                    }
                }
            }
        }
    }
    return users;
}