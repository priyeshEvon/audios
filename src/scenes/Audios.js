export default class images extends Phaser.Scene{
    preload(){
        this.load.image('music','/assets/bgm.png');
        this.load.image('pause','/assets/pause.png');
        this.load.image('play','/assets/play.png');
        this.load.image('up','/assets/up.png');
        this.load.image('down','/assets/down.png');

        this.load.audio('bgm','/assets/bgm.mp3');
        this.load.audio('click','/assets/click.ogg');

    }
    create(){
        const { width, height } = this.scale;
        this.bgm=this.sound.add('bgm',{loop:true});
        this.click=this.sound.add('click');
        const cardKeys = ['play', 'pause', 'up', 'down','music',];
        const labels = ['Play', 'Pause', 'Volume Up', 'volume Down ','Bgm Music'];

        const cols = 2;
        const spacingX = 200;
        const spacingY = 200;
        const startX = width / 2 - spacingX / 1.5;
        const startY = height / 2 - spacingY;

        for (let i = 0; i < cardKeys.length; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            const x = startX + col * spacingX;
            const y = startY + row * spacingY;
 
            const card = this.add.image(0, 0, cardKeys[i]).setScale(0.5).setInteractive().on('pointerdown',()=>{
                this.click.play();
                if(cardKeys[i]==='play'){
                    this.bgm.resume();
                }
                else if(cardKeys[i]==='pause'){
                    this.bgm.pause();
                }
                else if(cardKeys[i]==='down'){
                    this.bgm.setVolume(Math.max(0,this.bgm.volume-0.1))
                }
                else if(cardKeys[i]==='up'){
                    this.bgm.setVolume(Math.min(1,this.bgm.volume+0.1))
                }
                else if(cardKeys[i]==='music'){
                    this.bgm.play();
                }
            });
            const labelY = card.displayHeight/2+20;
            const label = this.add.text(0, labelY, labels[i], {
                font: '16px DejaVu Sans',
                color: '#000000'
            }).setOrigin(0.5);

            const container = this.add.container(x, y, [card, label]);
        }
    }
}