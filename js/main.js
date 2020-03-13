$(document).ready(function(){
//MILESTONE 1B  ----- INVIA MESSAGGIO CON HANDLEBARS
    $('#chat-input').keydown(function(event) {
        if(event.keyCode == 13) {
            creaMsg(testoMessaggio, direzione, selettoreConversazione);
        }
    });

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
                testoMessaggio: 'Ciao Fabio come stai?',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'received'
            }
        ],
        c1: [
            {
                testoMessaggio: 'Ciao Federico come stai?',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'received'
            }
        ],
        c2: [
            {
                testoMessaggio: 'Ciao Federica come stai?',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'received'
            }
        ],
        c3: [
            {
                testoMessaggio: 'Ciao Antonio come stai?',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'inviato'
            },
            {
                testoMessaggio: 'Non c\'è male, ma Luca mi sta facendo impazzire',                  //testoMsg è l'input dove scrive il messaggio
                direzione: 'received'
            }
        ],
    };

    var source = $('#messaggio-template').html();
    var template = Handlebars.compile(source);
    function creaMsg(testoMsg, sentReceived, selettoreConversazione) {
        var datiMessaggio = {
            testoMessaggio: testoMsg,
            direzione: 'inviato'
        };
        var templateMessaggio = template(datiMessaggio);
        $(selettoreConversazione).append(templateMessaggio);
    }




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
    });

// MILESTONE 3 ---- SELEZIONA Chat
    $('.contatto').click(function(){
        $('.contatto').removeClass('active');
        $(this).addClass('active');
        var utenteData = $(this).data('conversazione');
        var chatCorrispondente = $('.cta-messaggi[data-conversazione="' + utenteData + '"]')
        $('.cta-messaggi').removeClass('active'); //se qualcosa non funziona cambiare active con visible e creare css visible con display block
        chatCorrispondente.addClass('active');
    // PERSONALIZZAZIONE DELL'INTERFACCIA DI CHAT
    // CAMBIO NOME
        var nomeContatto = $(this).find('h2').text(); //prendo il nome del contatto sul quale ho cliccato
        $('.dati-interlocutore h2').text(nomeContatto); //sostituisco il nome con quello della chat cliccata
    // CAMBIO IMMAGINE
        var srcContatto = $(this).find('.immagine-contatto').children('img').attr('src'); //prendo l'immagine cliccata
        $('.immagine-interlocutore').children('img').attr('src', srcContatto);
    });
