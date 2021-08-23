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
            name: 'Merry Christmas Mr.',
            artist: '坂本龍一',
            url: 'http://music.163.com/song/media/outer/url?id=4899152.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        },
        {
            name: '绿野仙踪',
            artist: '陈悦/马克',
            url: 'images/绿野仙踪.mp3',
            cover: 'images/晴雪苏苏.png',
            theme: '#ebd0c2'
        }
    ]
});