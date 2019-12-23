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

const closeForm = e => {
    const openedForm = document.querySelector('.form-popup.opened');
    openedForm.classList.remove('opened');
    isModalOpen = false;
    openedForm.reset();
    openedForm.querySelector('.form-popup__close').removeEventListener('click', closeForm);
}

const openForm = form => {
    form.classList.add('opened');
    isModalOpen = true;
    form.querySelector('.form-popup__close').addEventListener('click', closeForm);
}

document.addEventListener('click', e => {
    if (!isModalOpen && e.target.dataset.target === "modalOpen") {
        openForm(simpleForm);
        simpleForm.theme.value = e.target.dataset.theme;
    } else if (isModalOpen && !e.target.closest('.form-popup')) {
        closeForm();
        e.preventDefault();
    }
});
preCalcForm.addEventListener('submit', e => {
    openForm(calcForm);
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
    closeForm();
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
