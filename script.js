(function ()
{
    // Keeping image from overflowing the box
    var img = document.getElementsByClassName('group-box').firstChild;
    img.onload = function() {
        if(img.height > img.width) {
            img.height = '100%';
            img.width = 'auto';
        }

    }
})();