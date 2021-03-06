$(document).ready ->
  $("#resume_form").on("ajax:success", (e, data, status, xhr) ->
    $(".return-msg").html("Merci! Votre candidature a été envoyée avec succès!")
    $('#resume_form')[0].reset()
    $('.upload-filename').html("")
    $(".input-ok").removeClass('input-ok')
    $(".form-control-feedback").removeClass('glyphicon-ok')
    $('.job-submit').addClass('no-submit');

    setTimeout ( ->
      $(".return-msg").fadeOut(800)
    ), 5000
  ).on "ajax:error", (e, xhr, status, error) ->
    $(".return-msg").html("Désolé, une erreur s'est produite.")