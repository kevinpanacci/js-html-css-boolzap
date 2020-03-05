$(document).ready(function(){
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    $('#invia').click(function(){
        var nomeInput = $('#chat-input').val();
        $('#chat-input').val('');
        var messaggio = $('.template .inviato').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.children('.text').text(nomeInput); // Modifico il testo messaggio nel messaggio
        messaggio.children('.orario').text(h + '.' + m);
        $('.conversazione').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
    });
});
