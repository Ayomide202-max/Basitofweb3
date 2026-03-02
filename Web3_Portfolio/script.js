
// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
function closeMenu() { mobileMenu.classList.remove('open'); }

// See More Projects
let expanded = false;
function toggleProjects() {
    expanded = !expanded;
    const hidden = document.getElementById('hidden-projects');
    const btn = document.getElementById('see-more-btn');
    const text = document.getElementById('see-more-text');
    const icon = document.getElementById('see-more-icon');
    if (expanded) {
        hidden.classList.add('show');
        text.textContent = 'Show Less';
        icon.textContent = '↑';
    } else {
        hidden.classList.remove('show');
        text.textContent = 'See More Projects';
        icon.textContent = '↓';
    }
}

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                const w = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = w; }, 100);
            });
        }
    });
}, { threshold: 0.3 });

const aboutSection = document.getElementById('about');
if (aboutSection) observer.observe(aboutSection);

// LIGHTBOX
const proofData = [
    { src: "portimg/POW_21.jpg", caption: "$ZURPY — Lead Mod for Zurpy Chat" },
    { src: "portimg/POW_19.jpg", caption: "$SINN — DM with project captain, coordination proof" },
    { src: "portimg/POW_18.jpg", caption: "$SINN — Payment received + work confirmation" },
    { src: "portimg/POW_17.jpg", caption: "$SINN — Delivering content draft" },
    { src: "portimg/POW_16.jpg", caption: "$JETBACK — Community manger for JetBack" },
    { src: "portimg/POW_15.jpg", caption: "WarpSynk Protocol CMO" },
    { src: "portimg/POW_14.jpg", caption: "Part of the decision makers for $ZURPY token project" },
    { src: "portimg/POW_12.jpg", caption: "Community Manager for $PDAP" },
    { src: "portimg/POW_11.jpg", caption: "Ambassador for $PIU token ( Push to 1M market cap)" },
    { src: "portimg/POW_8.jpg", caption: "Raider for $SHITDOG token(Organic raids that improve visibility for the project and more buys came in)" },
    { src: "portimg/POW_2.jpg", caption: "Raider for $PRERICH token(Organic raids that improve visibility for the project and more buys came in)" },
    { src: "portimg/POW_3.jpg", caption: "Built the Mona Coin community(Community Manager)" },
    { src: "portimg/POW_9.jpg", caption: "Review From the $ZURPY Team" },
    { src: "portimg/POW_10.jpg", caption: "CO_RAIDER for Darth Fater Coin" },
    { src: "portimg/POW_14.jpg", caption: "Raider for the chrism community" },

];
let currentProof = 0;

function openLightbox(idx) {
    currentProof = idx;
    document.getElementById('lb-img').src = proofData[idx].src;
    document.getElementById('lb-cap').textContent = proofData[idx].caption;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox(e) {
    if (!e || e.target === document.getElementById('lightbox') || e.currentTarget.classList.contains('lb-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
}
function lbNav(dir) {
    currentProof = (currentProof + dir + proofData.length) % proofData.length;
    document.getElementById('lb-img').src = proofData[currentProof].src;
    document.getElementById('lb-cap').textContent = proofData[currentProof].caption;
    event.stopPropagation();
}

