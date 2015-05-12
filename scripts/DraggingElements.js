$(document).ready(function () {
    $('.drag').draggable({
        opacity: 0.2,
        revert: true
    });

    $('.drop').droppable({
        hoverClass: 'drop1',
        over: function () {
            $(this).text('Please drop in anytime.');
        },
        out: function () {
            $(this).text('Goodbye');
        },
        drop: function (event, ui) {
            var that = $(this);
            that.text('Thanks!');
            $(ui.draggable).hide(1000);
            setTimeout(function () {
                $(ui.draggable).show(1000);
                that.text('Dropbox');
            }, 5000);
        }
    });
})

