requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;
        var io = new extIO({
            functions: {
                js: 'speechModule',
                python: 'checkio'
            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result").html("Your result:<br>" + ret);
            },
            tryit:function (this_e) {
                $tryit = $(this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')));
                $tryit.find('.input-text').focus();
                const isNumber = function(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }
                $tryit.find('.bn-check').click(function(e){
                    var number_text = $tryit.find('.input-text').val();
                    var number = parseInt(number_text);
                    if (isNumber(number)){
                        this_e.extSendToConsoleCheckiO(number);
                        e.stopPropagation();
                    }
                    else {
                        $tryit.find(".checkio-result").html('Please enter a number.');

                    }
                    return false;
                });
            }
        });
        io.start();
    }
);
