jQuery(function ($) {
    $('#rate1').shieldRating({
        max: 7,
        step: 0.1,
        value: 0,
        markPreset: false
    });

    $('#rate2').shieldRating({
        max: 7,
        step: 0.1,
        value: 0,
        markPreset: false
    });

    $('#rate3').shieldRating({
        max: 7,
        step: 0.1,
        value: 0,
        markPreset: false
    });

    var progress1 = $("#progress1").shieldProgressBar({
        value: 50,
        text: {
            enabled: true,
            template: "{0} %"
        }
    }).swidget();

    var progress2 = $("#progress2").shieldProgressBar({
        value: 50,
        text: {
            enabled: true,
            template: "{0} %"
        }
    }).swidget();

    var progress3 = $("#progress3").shieldProgressBar({
        value: 50,
        text: {
            enabled: true,
            template: "{0} %"
        }
    }).swidget();


    $("#increase1").shieldButton({
        events: {
            click: function () {
                progress1.value(progress1.value() + 10);
            }
        }
    });
    $("#decrease1").shieldButton({
        events: {
            click: function () {
                progress1.value(progress1.value() - 10);
            }
        }
    });

    $("#increase2").shieldButton({
        events: {
            click: function () {
                progress2.value(progress2.value() + 10);
            }
        }
    });
    $("#decrease2").shieldButton({
        events: {
            click: function () {
                progress2.value(progress2.value() - 10);
            }
        }
    });

    $("#increase3").shieldButton({
        events: {
            click: function () {
                progress3.value(progress3.value() + 10);
            }
        }
    });
    $("#decrease3").shieldButton({
        events: {
            click: function () {
                progress3.value(progress3.value() - 10);
            }
        }
    });
});