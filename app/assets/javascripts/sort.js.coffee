ready = ->
  $('#breweries').sortable
    axis:'y'
    update: ->
      $.post($(this).data('update-url'), $(this).sortable('serialize'))
      $('.flash-msg').empty
      $('.flash-msg').append('<div id="alert_message" class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="flash-msg-div">La liste à été mise à jour</div></div>')
      setTimeout ( ->
        window.location.reload()
      ), 3000




$(document).ready(ready)
$(document).on('page:load', ready)