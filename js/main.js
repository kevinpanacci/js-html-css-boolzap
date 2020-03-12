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
    // $('.card').click(function() {
    //         $(this).addClass('active');
    //         $(this).siblings().removeClass('active');
    // });




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

    // Milestone III -- NON FUNZIONERà PERCHè LA RICERCA è CHIAMATA CARD COME LE ALTRE CARD DEI CONTATTI :(
//Selezione chat attiva
    $('.card').click(function(){                    //osservo se il contact è stato cliccato
        $('.card').removeClass('active');
        $(this).addClass('active');
        var utenteData = $(this).data('conversazione');          //facciamo una foto valore data-conversazione dell'elemento cliccato, conversazione si riferisce a data-conversazione
        var chatCorrispondente = $('.conversazione-container[data-conversazione="' + utenteData + '"]') //cerco il relativo valore in Conversazione
        $('.conversazione-container').removeClass('visible');    //elimino l'active a tutte le conversazioni in conversazione
        chatCorrispondente.addClass('visible');    //nella conversazione giusta aggiungo l'active

        // PERSONALIZZAZIONE DELL'INTERFACCIA DI CHAT
// CAMBIO NOME
        var nomeContatto = $(this).find('h2').text(); //prendo il nome del contatto sul quale ho cliccato
        $('.nome-amico h2').text(nomeContatto); //sostituisco il nome con quello della chat cliccata
// CAMBIO IMMAGINE
        var srcContatto = $(this).find('.img-contatto').children('img').attr('src'); //prendo l'immagine cliccata
        $('.img-profilo-amico').children('img').attr('src', srcContatto);
//DROPDOWN MENU - NON FUNZIONANTE (PER I SOLITI PROBLEMI DI HTML E CSS)
        $(document).on('click', '.fa-angle-down', function() {
            $('.dropdown-menu-msg').toggleClass('invisible');
            // $(this).siblings('.dropdown-menu-msg').toggleClass('visible'); da continuare.....
        });
//CANCELLA MESSAGGIO

    });

});
