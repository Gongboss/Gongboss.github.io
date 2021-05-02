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
            name: '犹记多情',
            artist: '骆集益&&周志华',
            url: 'https://sharefs.yun.kugou.com/202105022110/1579e6f16612fadcd9fa89db0c7c5bcd/G191/M00/0E/17/_w0DAF5T2TmAMrqWAB_L3UrCzL4511.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
        {
            name: '雪暖晴岚',
            artist: '骆集益&&周志华',
            url: 'http://m10.music.126.net/20210502214134/8cd8f0b80eb072396192fe7eefd56345/ymusic/3ccf/c518/5145/e4efea5a6e46996e84c0cb6f022adc43.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
    ]
});