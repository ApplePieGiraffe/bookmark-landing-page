// MOBILE NAVIGATION

const body = document.querySelector('body');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');

function toggleMobileNav() {
    header.classList.toggle('mobile-nav--active');
}

function disableScroll() {
    body.classList.toggle('disable-scroll');
}

menuBtn.addEventListener('click', () => {
    toggleMobileNav();
    disableScroll();
});

// TABS

const featureSection = document.querySelector('.feature');
const tabs = document.querySelector('.tabs');
const featureHeading = document.querySelector('.feature__heading');
const featureDescription = document.querySelector('.feature__description');
const featureImg = document.querySelector('.feature__img');

let features = [
    {
        heading: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        imgPath: './img/illustration-features-tab-1.svg',
        altText: 'dashboard'
    },
    {
        heading: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        imgPath: './img/illustration-features-tab-2.svg',
        altText: 'dashboard with magnifying glass'
    },
    {
        heading: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        imgPath: './img/illustration-features-tab-3.svg',
        altText: 'people waving to each other'
    },
];

function changeTab(index) {
    function changeContent(index) {
        featureHeading.textContent = features[index].heading;
        featureDescription.textContent = features[index].description;
        featureImg.src = features[index].imgPath;
        featureImg.alt = features[index].altText;
    }

    featureSection.classList.add('fade-out');

    setTimeout(() => {
        changeContent(index);
        featureSection.classList.remove('fade-out');
    }, 1000);
}

tabs.addEventListener('click', (e) => {
    for (tab of tabs.children) {
        tab.classList.remove('tabs__tab--active');
    }

    e.target.classList.add('tabs__tab--active');

    if (e.target.id === 'tab-1') {
        changeTab(0);
    } else if (e.target.id === 'tab-2') {
        changeTab(1);
    } else if (e.target.id === 'tab-3') {
        changeTab(2);
    }
});

tabs.addEventListener('keypress', (e) => {
    for (tab of tabs.children) {
        tab.classList.remove('tabs__tab--active');
    }

    e.target.classList.add('tabs__tab--active');

    if (e.keyCode === 13) {
        if (e.target.id === 'tab-1') {
            changeTab(0);
        } else if (e.target.id === 'tab-2') {
            changeTab(1);
        } else if (e.target.id === 'tab-3') {
            changeTab(2);
        }
    }
});
