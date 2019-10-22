const faker = require("faker");

// 取得できる情報の一覧
//https://github.com/marak/Faker.js/

const data = {
    players: [],
    teams: []
}

const playerData = (i) => {
    return {
        id: i,
        name: faker.internet.userName(), //それっぽい名前を生成
        country: faker.address.country(),
        image: faker.image.people(), //それっぽい人の画像
        socials: {
            1: faker.internet.url(),
            2: faker.internet.url(),
            3: faker.internet.url(),
        }
    }
};

const teamData = (i) => {
    return {
        id: i,
        name: faker.hacker.phrase() + ' Team', //それっぽいチーム名
        country: faker.address.country(),
        image: faker.image.animals(), //それっぽい画像url
    }
}

//データ生成件数
const max = 1000

for(let i in [...Array(max)]){
    data.players.push(playerData(i))
    data.teams.push(teamData(i))
}

console.log(JSON.stringify(data))