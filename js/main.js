$(document).ready(function () {
    $('#get-data').click(function () {
        if (!$('#dane-programisty').length) {
            $('#get-data').after('<div id= "dane-programisty"></div>');
        }

        $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
            $('#dane-programisty').html(
                `<p>Imię: ${data.imie}</p>
                <p>Nazwisko: ${data.nazwisko}</p>
                <p>Zawód: ${data.zawod}</p>
                <p>Firma: ${data.firma}</p>`);
            console.log(data);
        });
    });
});