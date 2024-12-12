class VolumeControl {
    constructor(audioElement) {
        this.audio = audioElement;
        this.isMuted = false;
        this.lastVolume = 1;
        this.init();
    }

    init() {
        const volumeControl = document.createElement('div');
        volumeControl.className = 'volume-control';
        volumeControl.innerHTML = `
            <i class='bx bx-volume-full volume-icon'></i>
            <input type="range" class="volume-slider" min="0" max="100" value="100">
        `;

        document.body.appendChild(volumeControl);

        this.volumeIcon = volumeControl.querySelector('.volume-icon');
        this.volumeSlider = volumeControl.querySelector('.volume-slider');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.volumeIcon.addEventListener('click', () => this.toggleMute());
        this.volumeSlider.addEventListener('input', (e) => this.updateVolume(e.target.value / 100));
    }

    updateVolume(value) {
        this.audio.volume = value;
        this.lastVolume = value;
        this.updateIcon(value);
    }

    toggleMute() {
        if (this.isMuted) {
            this.audio.volume = this.lastVolume;
            this.volumeSlider.value = this.lastVolume * 100;
            this.isMuted = false;
        } else {
            this.lastVolume = this.audio.volume;
            this.audio.volume = 0;
            this.volumeSlider.value = 0;
            this.isMuted = true;
        }
        this.updateIcon(this.audio.volume);
    }

    updateIcon(volume) {
        const icon = this.volumeIcon;
        icon.className = 'bx volume-icon ' + (
            volume === 0 ? 'bx-volume-mute' :
            volume < 0.3 ? 'bx-volume-low' :
            volume < 0.7 ? 'bx-volume' :
            'bx-volume-full'
        );
    }
}