$(document).ready(function(){
    inviaMessaggio();

    function inviaMessaggio() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        $('#invia').click(function(){
            var nomeInput = $('#chat-input').val();
            $('#chat-input').val('');
            var messaggio = $('.template .messaggio-da-copiare').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
            messaggio.find('.text').text(nomeInput); // Modifico il testo messaggio nel messaggio
            messaggio.find('.orario').text(h + '.' + m);
            $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
            setTimeout(riceviMessaggio, 1000)
        });
    }

    function riceviMessaggio() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        var messaggio = $('.template-ricevuto .messaggio-da-copiare').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.find('.text').text('ok'); // Modifico il testo messaggio nel messaggio
        messaggio.find('.orario').text(h + '.' + m);
        $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
    }

// RICERCA UTENTE
    $('#cerca-utente').keyup(function(event) {
        var carattereFiltro = $(this).val();
        $('.nome-contatto h2').each(function() {
            if ($(this).text().toLowerCase().includes(carattereFiltro)) { 
                $('.card').show();
            } else {
                $('.card').hide();
            }
        });
    });

});
