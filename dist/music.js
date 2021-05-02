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
            url: 'images/犹记多情_变调.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
    ]
});