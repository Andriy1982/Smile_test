
const selectRef = document.querySelector('.select');
const inputsFileRef = document.querySelectorAll('input[type=file]');

const handelSelect = function({target}) {

    const isOption = !target.classList.contains('selected') && target.classList.contains('custom-option');

    this.classList.toggle('open');
    if (isOption) {
        target.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        target.classList.add('selected');
        target.closest('.select').querySelector('.select__trigger span').textContent = target.textContent;
    };
};

const handlerInputFile = function(e) {

    if (e.target.files.length > 0) {
        this.nextElementSibling.textContent = "Selected element";
        this.nextElementSibling.classList.add('isSelected');
    };
 };


selectRef.addEventListener('click',  handelSelect);

window.addEventListener('click', function(e) {
    if (!selectRef.contains(e.target)) {
        selectRef.classList.remove('open');
    };
});

inputsFileRef.forEach(item => item.addEventListener('change', handlerInputFile));
