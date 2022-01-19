// image upload js
$('document').ready(() => {
    console.log('true');
    $('.icon-container').click(function () {
        console.log('remove');
        var tag = document.activeElement;
        console.log(tag);
        var img = $(this).parent().find('img');
        var text = $(this).parent().find('.fileName');

        img.attr('src', 'upload_icon.svg');
        img.css('width', '50%');
        text.html('No file Chosen ');
        $(this).css('display', 'none');
    });
    
    
    $('.fileUpload').on('change', function () {

        var tag = document.activeElement;
        var img = tag.previousElementSibling.firstElementChild;
        var text = tag.previousElementSibling.children[1];
        var cancel = tag.previousElementSibling.children[2];

        if (this.files[0]) {
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                // console.log(result);
                img.style.width = '90%';
                img.src = result;


            }
            text.innerHTML = this.files[0].name;
            cancel.style.display = "flex";
            reader.readAsDataURL(this.files[0]);
        }

    })
})