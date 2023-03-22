const images = () => {

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup_img');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImage.style.width = '75%';
    bigImage.style.height = '75%';
    bigImage.style.objectFit = 'contain';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden'
            // bigImage.src = path
        }

        if(target && (target.matches('div.popup_img') || target.matches('div.popup_img > img'))) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = ''
        }
    });
};

export default images