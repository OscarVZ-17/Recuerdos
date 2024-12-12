class Gallery {
    constructor() {
        this.modal = new MediaModal();
        this.init();
    }

    init() {
        const gallery = document.querySelector('.gallery');
        const mediaItems = this.getMediaItems();

        // Create gallery items
        mediaItems.forEach((item, index) => {
            const element = this.createGalleryItem(item, index);
            gallery.appendChild(element);
        });

        // Add click listeners
        gallery.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;

            const index = parseInt(item.dataset.index);
            this.modal.open(mediaItems, index);
        });
    }

    createGalleryItem(item, index) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.dataset.index = index;

        if (item.type === 'video') {
            div.innerHTML = `
                <div class="media-wrapper">
                    <video src="${item.src}" muted></video>
                    <i class='bx bx-play-circle play-icon'></i>
                </div>
            `;
        } else {
            div.innerHTML = `
                <div class="media-wrapper">
                    <img src="${item.src}" alt="${item.alt || ''}" loading="lazy">
                </div>
            `;
        }

        return div;
    }

    getMediaItems() {
        // Replace with your actual media items
        return [
            
                { "type": "image", "src": "7.jpg", "alt": "7" },
                { "type": "image", "src": "8.jpg", "alt": "8" },
                { "type": "image", "src": "9.jpg", "alt": "9" },
                { "type": "image", "src": "10.jpg", "alt": "10" },
                { "type": "image", "src": "Carta 1.jpg", "alt": "Carta 1" },
                { "type": "image", "src": "Carta 2.jpg", "alt": "Carta 2" },
                { "type": "image", "src": "Carta 3.jpg", "alt": "Carta 3" },
                { "type": "image", "src": "Carta 4.jpg", "alt": "Carta 4" },
                { "type": "image", "src": "Carta 5.jpg", "alt": "Carta 5" },
                { "type": "image", "src": "Presentación.jpg", "alt": "Presentación" },
                { "type": "image", "src": "1.png", "alt": "1" },
                { "type": "image", "src": "2.png", "alt": "2" },
                { "type": "image", "src": "Brown Beige Floral Vintage Love Poetry Instagram Post.jpg", "alt": "Brown Beige Floral Vintage Love Poetry Instagram Post" },
                { "type": "image", "src": "Carta Amor ilustrativo Rosa.jpg", "alt": "Carta Amor llustrativo Rosa" },
                { "type": "image", "src": "Colorful Cute Playful Thank You Letter.jpg", "alt": "Colorful Cute Playful Thank You Letter" },
                { "type": "image", "src": "Cream Simple Cute Love Letter.jpg", "alt": "Cream Simple Cute Love Letter" },
                { "type": "image", "src": "Documento a4 de carta de amor para imprimir para amor y amistad (1).png", "alt": "Documento a4 de carta de amor para imprimir para amor y amistad (1)" },
                { "type": "image", "src": "Documento a4 de collage para imprimir con carta de amor para amor y amistad.png", "alt": "Documento a4 de collage para imprimir con carta de amor para amor y amistad" },
                { "type": "image", "src": "httpswww.canva.comphanacreativestudio.jpg", "alt": "httpswww.canva.comphanacreativestudio" },
                { "type": "image", "src": "Pink Purple Cute Creative Thank You Letter.jpg", "alt": "Pink Purple Cute Creative Thank You Letter" },
                { "type": "image", "src": "White Grey Minimalist Paper Handwritten Thank You Letter.jpg", "alt": "White Grey Minimalist Paper Handwritten Thank You Letter" },
                { "type": "video", "src": "5.mp4", "alt": "5" },
                { "type": "video", "src": "Nuestro amor.mp4", "alt": "Nuestro amor" },
            // Add more items as needed
        ];
    }
}