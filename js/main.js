$(document).ready(function() {
//MILESTONE 1B  ----- INVIA MESSAGGIO CON HANDLEBARS
    for (var convKey in messaggiArchiviati) {
        var numeroConversazione = convKey[1];
        for (var i = 0; i < convKey.length; i++) {
            var oggettoMessaggio = messaggiArchiviati[convKey][i];
            var testoMessaggio = oggettoMessaggio.testoMessaggio;
            var direzione = oggettoMessaggio.direzione;
            var selettoreConversazione = $('.cta-messaggi[data-onversazione="' + numeroConversazione + '"]');
            creaMsg(testoMessaggio, direzione, selettoreConversazione);
        }
    }
    var messaggiArchiviati = {
        c0: [
            {
                testoMessaggio: 'Ciao Fabio come stai?',
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'ricevuto'
            }
        ],
        c1: [
            {
                testoMessaggio: 'Ciao Federico come stai?',
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'ricevuto'
            }
        ],
        c2: [
            {
                testoMessaggio: 'Ciao Federica come stai?',
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'ricevuto'
            }
        ],
        c3: [
            {
                testoMessaggio: 'Ciao Antonio come stai?',
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',
                direzione: 'ricevuto'
            }
        ],
    };

    var source = $('#messaggio-template').html();
    var template = Handlebars.compile(source);
    function creaMsg(testoMsg, sentReceived, selettoreConversazione) {
        var datiMessaggio = {
            testoMessaggio: testoMsg,
            direzione: sentReceived
        };
        var templateMessaggio = template(datiMessaggio);
        $(selettoreConversazione).append(templateMessaggio);
    }

    // INVIO MESSAGGIO (funzione)
    $('#chat-input').keypress(function(event) {
        if(event.keyCode == 13) {
            invioMessaggio();
        }
    });

    function invioMessaggio() {
        var testoMessaggio = $('#chat-input').val();
        if(testoMessaggio.trim().length > 0) {
            $('#chat-input').val('');
            creaMsg(testoMessaggio, 'inviato', '.cta-messaggi.active');
            scroll();
            setTimeout(function() {
                creaMsg('ok', 'ricevuto', '.cta-messaggi.active');
                scroll();
            }, 1000);
        };
    };





// MILESTONE 2B ----- RICERCA UTENTE
    $('.search-input').keyup(function(event) {
    var carattereFiltro = $(this).val();
    $('.contatto').each(function() {
        var x = $(this).find('.info-contatto h2').text().toLowerCase();
        if (x.includes(carattereFiltro)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    });




// MILESTONE 3 ---- SELEZIONA Chat
    $('.contatto').click(function() {
        $('.contatto').removeClass('active');
        $(this).addClass('active');
        var utenteData = $(this).data('conversazione');
        var chatCorrispondente = $('.cta-messaggi[data-conversazione="' + utenteData + '"]')
        $('.cta-messaggi').removeClass('active'); //se qualcosa non funziona cambiare active con visible e creare css visible con display block
        chatCorrispondente.addClass('active');
    // PERSONALIZZAZIONE DELL'INTERFACCIA DI CHAT
    // CAMBIO NOME
        var nomeContatto = $(this).find('h2').text();
        $('.dati-interlocutore h2').text(nomeContatto);
    // CAMBIO IMMAGINE
        var srcContatto = $(this).find('.immagine-contatto').children('img').attr('src');
        $('.immagine-interlocutore').children('img').attr('src', srcContatto);
    });

    //Aggiunta chat utente
    var nuoviContatti = {
        c4: [
            {
                nome: 'Alessio',
                immagine: 'https://picsum.photos/303/300'
            }
        ],
        c5: [
            {
                nome: 'Fabrizio',
                immagine: 'https://picsum.photos/303/301'
            }
        ],
        c6: [
            {
                nome: 'Luca',
                immagine: 'https://picsum.photos/303/302'
            }
        ],
    };

    var source = $('#template-contatti').html();
    var template = Handlebars.compile(source);

    

    var datiContatto = {
        nome: nomeContatto,
        immagine: immagineContatto
    };
    var templateContatto = template(datiContatto);


});
