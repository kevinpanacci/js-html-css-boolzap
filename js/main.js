$(document).ready(function(){


// Utilizzo invio per mandare il messaggio
    $('.chat-input').keydown(function(event) {
        if(event.keyCode == 13) {
            inviaMessaggio();
        }
    });

// cambio microfono
    $('#chat-input').focus(function() {
        $('#invia').toggleClass('fa fa-microphone fas fa-paper-plane');
    });

// RICERCA UTENTE
    $('#cerca-utente').keyup(function(event) {
        var carattereFiltro = $(this).val();
        $('.card').each(function() {
            var x = $(this).find('.nome-contatto h2').text().toLowerCase();
            if (x.includes(carattereFiltro)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

//Selezione chat
    $('.card').click(function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
    });

//dropdown menu
    $(document).on('click', '.fa-angle-down', function() {
        $('.dropdown-menu-msg').toggleClass('invisible');
    });

    // function inviaMessaggio() {
    //     var d = new Date();
    //     var m = d.getMinutes();
    //     var h = d.getHours();
    //     $('#invia').click(function(){
    //         var nomeInput = $('#chat-input').val();
    //         $('#chat-input').val('');
    //         var messaggio = $('.template .messaggio-da-copiare').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
    //         messaggio.find('.text').text(nomeInput); // Modifico il testo messaggio nel messaggio
    //         messaggio.find('.orario').text(h + '.' + m);
    //         $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
    //         setTimeout(riceviMessaggio, 1000)
    //     });
    // }
    function inviaMessaggio() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        var nomeInput = $('#chat-input').val();
        $('#chat-input').val('');
        var messaggio = $('.template .messaggio-da-copiare').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.find('.text').text(nomeInput); // Modifico il testo messaggio nel messaggio
        messaggio.find('.orario').text(h + '.' + m);
        $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
        setTimeout(riceviMessaggio, 1000)

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

});
