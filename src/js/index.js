new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    }
});
let isModalOpen = false;
const calcForm = document.querySelector('#calcForm');
const simpleForm = document.querySelector('#simpleForm');
const preCalcForm = document.querySelector('#preCalcForm');
document.addEventListener('click', e => {
    if (!isModalOpen && e.target.dataset.target === "modalOpen") {
        simpleForm.classList.add('opened');
        isModalOpen = true;
        simpleForm.theme.value = e.target.dataset.theme;
    }else if (isModalOpen && !e.target.closest('.form-popup')) {
        const openedForm = document.querySelector('.form-popup.opened');
        openedForm.classList.remove('opened');
        isModalOpen = false;
        openedForm.reset();
        e.preventDefault();
    }
});
preCalcForm.addEventListener('submit', (e) => {
    calcForm.classList.add('opened');
    isModalOpen = true;
    calcForm.departure.value = preCalcForm.departure.value;
    calcForm.destination.value = preCalcForm.destination.value;
    calcForm.weight.value = preCalcForm.weight.value;
    calcForm.volume.value = preCalcForm.volume.value;
    calcForm.kind.value = preCalcForm.kind.value;
    calcForm.code.value = preCalcForm.code.value;
    e.preventDefault();
});

$(document).on('af_complete', function(event, response) {
    const idForm = response.form.attr('id');
    const form = document.getElementById(idForm);
    form.reset();
    form.classList.remove('opened');
    isModalOpen = false;
    if (idForm === 'calcForm') {
        const preForm = document.querySelector('#preCalcForm');
        preForm.reset();
    }
});

const phoneInputs = document.querySelectorAll('input[type=tel]');
phoneInputs.forEach(input => IMask(input, {mask: '+{7}(000) 000-00-00'}));

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400,
    easing: 'easeOutQuad',
    updateURL: false
});
