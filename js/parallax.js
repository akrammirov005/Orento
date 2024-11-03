let logo = document.querySelector('.logo');
let menu = document.querySelector('.menu');
let contactNumber = document.querySelector('.contact-number');
let bannerTextH1 = document.querySelector('.banner-text__h1');
let bannerTextP = document.querySelector('.banner-text__p');
let car = document.querySelector('.car');
let bannerCard = document.querySelectorAll('.card-banner');
let discardSquareTop = document.querySelector('.discard-square__top');
let discardSquareBottom = document.querySelector('.discard-square__bottom');
let appSquareTop = document.querySelector('.app-square__top');
let appSquareBottom = document.querySelector('.app-square__bottom');

const onScroll = (event) => {
    const scrollPOsition = event.target.scrollingElement.scrollTop;

    for (const card of bannerCard) {
        
    if(scrollPOsition > 80){
        logo.style.transform = 'scale(0)';
        menu.style.transform = 'translateY(-150px)';
        contactNumber.style.transform = 'scale(0)';
        bannerTextH1.style.transform = 'translateY(200px)';
        bannerTextP.style.transform = 'translateY(200px)';
        car.style.transform = 'perspective(500px) translate(1200px)';
        card.style.transform = 'translateY(300px)'
    }else{
        logo.style.transform = 'scale(1)';
        menu.style.transform = 'translateY(0%)';
        contactNumber.style.transform = 'scale(1)';
        bannerTextH1.style.transform = 'translateX(0px)';
        bannerTextP.style.transform = 'translateX(0px)';
        car.style.transform = 'perspective(500px) translate(0px)';
        card.style.transform = 'translateY(0px)'
    }
}
discardSquareTop.style.transform = `translateX(${scrollPOsition / 2}px)`
discardSquareBottom.style.transform = `translateX( ${- scrollPOsition / 2}px)`
appSquareTop.style.transform = `translateX(${ - scrollPOsition / 5}px)`
appSquareBottom.style.transform = `translateX(${ - scrollPOsition / 5}px)`
}
document.addEventListener('scroll', onScroll)