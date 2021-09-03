document.querySelector('.select-wrapper').addEventListener('click', function() {
    console.log(this);
    this.querySelector('.select').classList.toggle('open');
})

// for (const dropdown of document.querySelectorAll(".select-wrapper")) {
//     dropdown.addEventListener('click', function() {
//         this.querySelector('.select').classList.toggle('open');
//     })
// }

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
        }
    })
}

// window.addEventListener('click', function(e) {
//     const select = document.querySelector('.select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

const handlerInputFile = function(e) {
    console.log(e.target);
    console.log(this);
   console.log( this.parentNode.querySelector('.label-file').textContent);
//    this.parentNode.querySelector('.label-file').textContent = e.target.files[0].name

   if (e.target.files.length > 0) {
       console.log(this.nextElementSibling);
       this.nextElementSibling.textContent = "Selected element";
       this.nextElementSibling.classList.add('isSelected')
    // this.parentNode.querySelector('.label-file').textContent = "Selected element"
    // this.parentNode.querySelector('.label-file').classList.add('isSelected')
   }
}

const elements = document.querySelectorAll('input[type=file]');
console.log(elements);
elements.forEach(item => item.addEventListener('change', handlerInputFile))

// let file = document.querySelector('input[type=file]');
// console.log(file);
// file.addEventListener('change', function(e) {
//     console.log(e.target);
//     console.log(this);
//    console.log( this.parentNode.querySelector('.label-file').textContent);
//    this.parentNode.querySelector('.label-file').textContent = e.target.files[0].name

//    if (e.target.files.length > 0) {
//     this.parentNode.querySelector('.label-file').textContent = "Selected element"
//     this.parentNode.querySelector('.label-file').classList.add('isSelected')
//    }
// })