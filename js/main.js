$(document).ready(function(){
    $('#invia').click(function(){
        var nomeInput = $('#chat-input').val();
        $('#chat-input').val('');
        var messaggio = $('.template #inviato').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.children('.text').text(nomeInput); // Modifico il testo messaggio nel messaggio
        messaggio.children('.orario').text('05:05');
        $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
    });
});
