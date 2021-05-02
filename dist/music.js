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
    audio: [
        {
            name: '犹记多情·变调',
            artist: '骆集益',
            url: 'https://sharefs.yun.kugou.com/202105021505/c33c509533df6e472f0f4c5e383a2760/G189/M06/00/11/_Q0DAF5V0x-AeyikAB51Th1V_2o580.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
    ]
});