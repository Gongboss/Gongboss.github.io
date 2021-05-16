const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    fixed: true,
    mini: true,
    preload: 'auto',
    mutex: true,
    orderz: 'random',
    audio: [
        {
            name: '犹记多情·变调',
            artist: '骆集益',
            url: 'https://sharefs.yun.kugou.com/202105021505/c33c509533df6e472f0f4c5e383a2760/G189/M06/00/11/_Q0DAF5V0x-AeyikAB51Th1V_2o580.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
        {
            name: '瑶山遗韵',
            artist: '骆集益',
            url: 'http://music.163.com/song/media/outer/url?id=26344109.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
        {
            name: '犹记多情',
            artist: '骆集益&&周志华',
            url: 'https://sharefs.yun.kugou.com/202105022110/1579e6f16612fadcd9fa89db0c7c5bcd/G191/M00/0E/17/_w0DAF5T2TmAMrqWAB_L3UrCzL4511.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
        {
            name: '雪暖晴岚',
            artist: '骆集益&&周志华',
            url: 'https://sharefs.yun.kugou.com/202105031219/6aebac69db7cc6123512d1198c419615/G146/M08/06/15/0g0DAFvOsF-AUM05AB3RE3gVkqY640.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
    ]
});