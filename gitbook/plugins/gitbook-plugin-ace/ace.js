require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        var aceCount = 0;

        $('.ace').each(function() {
            var $ace = $(this).children('.aceCode');
            var config = $ace.data('config');

            var id = 'ace' + (aceCount++);
            $ace.attr('id', id);

            var editor = ace.edit(id);
            editor.setTheme('ace/theme/chrome');
            editor.setOptions({
                autoScrollEditorIntoView: true,
                maxLines: 100
            });

            if (config.edit === false)
                editor.setReadOnly(true);

            if (config.check === false)
                editor.session.setOption("useWorker", false);

            if (config.lang)
                editor.getSession().setMode('ace/mode/' + config.lang);
            else
                editor.getSession().setMode('ace/mode/c_cpp'); //default to c language

            // handler for dark theme
            $aceParent = $(this);
            setTimeout(function() {
                if ($('.book').hasClass('color-theme-2')) {
                    $aceParent.addClass('dark');
                    editor.setTheme('ace/theme/vibrant_ink');
                }
            }, 1);

            $('#color-theme-preview-0, #color-theme-preview-1').click(function() {
                $aceParent.removeClass('dark');
                editor.setTheme('ace/theme/chrome');
            });

            $('#color-theme-preview-2').click(function() {
                if (!$aceParent.hasClass('dark'))
                    $aceParent.addClass('dark');
                editor.setTheme('ace/theme/vibrant_ink');
            });
        });
    };

    gitbook.events.bind("page.change", init);
});
