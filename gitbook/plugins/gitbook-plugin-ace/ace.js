require(["gitbook", "jquery"], function(gitbook, $) {

    var init = function() {
        var aceCount = 0;

        $('.ace').each(function() {
            var $ace = $(this).children('.aceCode');
            var config = $ace.data('config');

            var id = 'ace' + (aceCount++);
            $ace.attr('id', id);

            var editor = ace.edit(id);

            editor.setOptions({
                autoScrollEditorIntoView: true,
                maxLines: 100
            });

            if (config.edit === false)
                editor.setReadOnly(true);

            if (config.theme === undefined)
                editor.setTheme('ace/theme/chrome');
            else
                editor.setTheme('ace/theme/' + config.theme);

            if (config.check === false)
                editor.session.setOption("useWorker", false);

            if (config.lang)
                editor.getSession().setMode('ace/mode/' + config.lang);
            else
                editor.getSession().setMode('ace/mode/c_cpp'); //default to c language
        });
    };

    gitbook.events.bind("page.change", init);
});
