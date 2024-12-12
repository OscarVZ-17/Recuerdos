class MediaModal {
    constructor() {
        this.modal = null;
        this.currentIndex = 0;
        this.mediaItems = [];
        this.init();
    }

    init() {
        // Create modal HTML
        const modalHTML = `
            <div class="modal">
                <div class="modal-content">
                    <button class="modal-close">
                        <i class='bx bx-x'></i>
                    </button>
                    <button class="modal-nav modal-prev">
                        <i class='bx bx-chevron-left'></i>
                    </button>
                    <button class="modal-nav modal-next">
                        <i class='bx bx-chevron-right'></i>
                    </button>
                    <div class="modal-media"></div>
                </div>
            </div>
        `;

        // Add modal to DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        this.modal = document.querySelector('.modal');
        this.mediaContainer = this.modal.querySelector('.modal-media');
        
        // Event listeners
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        this.modal.querySelector('.modal-prev').addEventListener('click', () => this.navigate(-1));
        this.modal.querySelector('.modal-next').addEventListener('click', () => this.navigate(1));
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape': this.close(); break;
                case 'ArrowLeft': this.navigate(-1); break;
                case 'ArrowRight': this.navigate(1); break;
            }
        });
    }

    open(items, startIndex = 0) {
        this.mediaItems = items;
        this.currentIndex = startIndex;
        this.showMedia();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.mediaContainer.innerHTML = '';
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.mediaItems.length) % this.mediaItems.length;
        this.showMedia();
    }

    showMedia() {
        const item = this.mediaItems[this.currentIndex];
        const isVideo = item.type === 'video';
        
        this.mediaContainer.innerHTML = isVideo 
            ? `<video src="${item.src}" controls autoplay></video>`
            : `<img src="${item.src}" alt="${item.alt || ''}" />`;
    }
}