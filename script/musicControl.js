// music-controller.js
class MusicController {
    constructor() {
        this.audio = null;
        this.init();
    }

    init() {
        // Kiểm tra xem audio đã được tạo chưa
        if (!window.sharedAudio) {
            window.sharedAudio = new Audio('../image-and-audio/musics.mp3');
            window.sharedAudio.loop = true;
            window.sharedAudio.volume = 0.5;
        }
        this.audio = window.sharedAudio;

        // Lấy thời gian phát từ localStorage
        const savedTime = localStorage.getItem('musicCurrentTime');
        if (savedTime) {
            this.audio.currentTime = parseFloat(savedTime);
        }

        // Lưu thời gian phát mỗi giây
        setInterval(() => {
            if (this.audio && !this.audio.paused) {
                localStorage.setItem('musicCurrentTime', this.audio.currentTime);
            }
        }, 1000);

        // Tự động phát
        this.play();
    }

    play() {
        if (this.audio) {
            this.audio.play().catch(e => {
                console.log('Autoplay prevented:', e);
                // Phát khi user click lần đầu
                document.addEventListener('click', () => {
                    this.audio.play();
                }, { once: true });
            });
        }
    }

    pause() {
        if (this.audio) {
            this.audio.pause();
        }
    }
}

// Khởi tạo controller
const musicController = new MusicController();