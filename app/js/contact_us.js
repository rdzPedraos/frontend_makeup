const btn_google = $('#btn_google');
const btn_form = $('#btn_form')

btn_google.click( ()=>{
    $('.show-value .value_googlemaps').show();
    $('.show-value .value_form').hide();
});

btn_form.click( ()=>{
    $('.show-value .value_googlemaps').hide();
    $('.show-value .value_form').show();
});