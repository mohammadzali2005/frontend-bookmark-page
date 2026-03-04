// toggler for mobile screens
const togglerIconMobile = document.querySelector('.toggler-icon-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const logo = document.querySelector('.logo-img');
const closeIconMobile = document.querySelector('.close-icon-mobile');


togglerIconMobile.addEventListener('click', () => {
    menuMobile.style.display = 'block';
    togglerIconMobile.style.display = 'none';
    closeIconMobile.style.display = 'block';
    logo.src = './assets/logo-bookmark-light.png';
})

closeIconMobile.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    togglerIconMobile.style.display = 'flex';
    closeIconMobile.style.display = 'none';
    logo.src = './assets/logo-bookmark.svg';
})


// tabs
const tabsBtn1 = document.querySelector('.features-btn-1');
const tabsBtn2 = document.querySelector('.features-btn-2');
const tabsBtn3 = document.querySelector('.features-btn-3');

const tabsImg = document.querySelector('.feature-image');
const tabsTitle = document.querySelector('.feature-title');
const tabsSubtitle = document.querySelector('.feature-subtitle');

// tab 1
tabsBtn1.addEventListener('click', () => { 
    tabsImg.src = "./assets/illustration-features-tab-1.svg";
    tabsImg.style.height = 'auto';
    tabsImg.style.width = '60%';

    tabsBtn1.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
    tabsBtn2.style.borderBottom = 'none';
    tabsBtn3.style.borderBottom = 'none';

    tabsTitle.innerText = 'Bookmark in one click';
    tabsSubtitle.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.';
});

// tab 2
tabsBtn2.addEventListener('click', () => { 
    tabsImg.src = "./assets/illustration-features-tab-2.svg";
    tabsImg.style.height = 'auto';
    tabsImg.style.width = '60%';

    tabsTitle.innerText = 'Intelligent search';
    tabsSubtitle.innerText = 'Our powerful search feature will help you find saved sites in no time at all. No need to travel through all of your bookmarks';

    tabsBtn1.style.borderBottom = 'none';
    tabsBtn2.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
    tabsBtn3.style.borderBottom = 'none';
});

// tab 3
tabsBtn3.addEventListener('click', () => { 
    tabsImg.src = "./assets/illustration-features-tab-3.svg";
    tabsImg.style.height = 'auto';
    tabsImg.style.width = '60%';

    tabsTitle.innerText = 'Share your bookmarks';
    tabsSubtitle.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';

    tabsBtn1.style.borderBottom = 'none';
    tabsBtn2.style.borderBottom = 'none';
    tabsBtn3.style.borderBottom = '3px solid hsl(0, 94%, 66%)';
});


// accordians
const accBtn1 = document.querySelector('.accordian-btn-1');
const accBtn2 = document.querySelector('.accordian-btn-2');
const accBtn3 = document.querySelector('.accordian-btn-3');
const accBtn4 = document.querySelector('.accordian-btn-4');

const accBox1 = document.querySelector('.accordian-box-1');
const accBox2 = document.querySelector('.accordian-box-2');
const accBox3 = document.querySelector('.accordian-box-3');
const accBox4 = document.querySelector('.accordian-box-4');

// accordian 1
accBtn1.addEventListener('click', () => {
    accBox1.style.height = accBox1.style.height === '0px' ? 'auto' : '0';
})

// accordian 2
accBtn2.addEventListener('click', () => {
    accBox2.style.height = accBox2.style.height === '0px' ? 'auto' : '0';
})

// accordian 3
accBtn3.addEventListener('click', () => {
    accBox3.style.height = accBox3.style.height === '0px' ? 'auto' : '0';
})

// accordian 4
accBtn4.addEventListener('click', () => {
    accBox4.style.height = accBox4.style.height === '0px' ? 'auto' : '0';
})