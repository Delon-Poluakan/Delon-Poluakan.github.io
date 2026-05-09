document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add("show");
    }, 150);

    const cards = document.querySelectorAll(".card, .article-card, .contact-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, 150 * (index + 1));
    });

    const mediaItems = document.querySelectorAll('img:not(#modal-img), video:not(#modal-video)');
    mediaItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            openModal(this);
        });
    });
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Teks '" + text + "' berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

function openModal(element) {
    const modal = document.getElementById('modal') || document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img') || document.getElementById('imgModal');
    const modalVideo = document.getElementById('modal-video');

    if (modal) {
        modal.style.display = "flex";
        
        setTimeout(() => modal.classList.add("show"), 10);
        
        if (modalImg) modalImg.style.display = "none";
        if (modalVideo) modalVideo.style.display = "none";

        if (element.tagName === 'IMG' && modalImg) {
            modalImg.src = element.src;
            modalImg.style.display = "block";
        } 
        else if (element.tagName === 'VIDEO' && modalVideo) {
            const sourceTag = element.querySelector('source');
            modalVideo.src = sourceTag ? sourceTag.src : element.src;
            modalVideo.style.display = "block";
            modalVideo.play();
        }

        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const modal = document.getElementById('modal') || document.getElementById('myModal');
    const modalVideo = document.getElementById('modal-video');

    if (modal) {
        modal.classList.remove("show");
        
        setTimeout(() => {
            modal.style.display = "none";
            
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }, 400);

        document.body.style.overflow = 'auto'; 
    }
}

function showMessage() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('modal') || document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
};
