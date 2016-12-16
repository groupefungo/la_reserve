var ready = function(){
    //Initialize homepage slider
    if($('#slippry-demo').length > 0){
        $('#slippry-demo').slippry({
            pager:false,
            auto: true
        });
    }

    //Slide In responsive menu ***********************************************************************************
    function whichTransitionEvent() {
        var el = document.createElement('event'),
            transitionEvents = {
                'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser
                'MozTransition'    : 'transitionend',      // only for FF < 15
                'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
            };
        for(var t in transitionEvents){
            if( el.style[t] !== undefined ){
                return transitionEvents[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent();
    $('[data-toggle="offcanvas"], .overlay').click(function () {
        $('.overlay').toggleClass('active');
        $('body').toggleClass('active');
        $('.row-offcanvas').toggleClass('active');
        $('.sidebar-offcanvas').toggleClass('active');
        $('.navbar-toggle').toggleClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.navbar-collapse').removeClass('transition');
            });
    });

    $('.navbar .nav a').click(function () {
        $('.overlay').removeClass('active');
        $('body').removeClass('active');
        $('#navbar').removeClass('in');
        $('.row-offcanvas').removeClass('active');
        $('.sidebar-offcanvas').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.navbar-collapse').removeClass('transition');
            });
    });

    $('.overlay').on('swiperight',function () {
        $('.overlay').addClass('active');
        $('body').addClass('active');
        $('#navbar').addClass('in');
        $('.row-offcanvas').addClass('active');
        $('.sidebar-offcanvas').addClass('active');
        $('.navbar-toggle').removeClass('collapsed');
        $('.navbar-collapse').addClass('transition');
    });

    $('.overlay').on('swipeleft',function () {
        $('.overlay').removeClass('active');
        $('body').removeClass('active');
        $('#navbar').removeClass('in');
        $('.row-offcanvas').removeClass('active');
        $('.sidebar-offcanvas').removeClass('active');
        $('.navbar-toggle').addClass('collapsed');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.navbar-collapse').removeClass('transition');
            });
    });
    //end ***********************************************************************************

    //La reserve logo hover animations
    if($('.reserve-container').length > 0){
        var cw;
        var cimg;
        var ctxt;
        var animating = false;

        $('.micro-item').hover(function (){
            cw = $(this).find('.content-wrapper');
            cimg = cw.find('.logo-img');
            ctxt = cw.find('.text-container');

            TweenLite.to(cimg, .45, {top:'-25px',opacity:'0', ease: Expo.easeOut, overwrite:1});
            TweenLite.to(cw, .55, {background:'#FFF', ease: Expo.easeInOut, delay:.35, overwrite:1});
            TweenLite.to(ctxt, .45, {display:'block', opacity:'1',top:'50%', ease: Expo.easeInOut, delay:.58, overwrite:1});
        },function () {
            cw = $(this).find('.content-wrapper');
            cimg = cw.find('.logo-img');
            ctxt = cw.find('.text-container');

            TweenLite.to(ctxt, .45, {display:'none', opacity:'0',top:'65%', ease: Expo.easeInOut, overwrite:1});
            TweenLite.to(cw, .55, {background:'#ed202a', ease: Expo.easeInOut, delay:.45, overwrite:1});
            TweenLite.to(cimg, .45, {top:'0',opacity:'1', ease: Expo.easeOut, delay:.35, overwrite:1});
        });
    }

    if($('.form-container').length > 0){
        $('.job-submit').on('click',function(e){
            var fname = $('#contact_form_firstname');
            var lname = $('#contact_form_lastname');
            var email = $('#contact_form_email');
            var message = $('#contact_form_message');

            console.log('hello')

            if(fname == ""){
                fname.addClass('form-error');
                e.preventDefault();
                return false;
            }
        });

        // $('button').on('click',function(e){
        //     var fname = $('#contact_form_firstname');
        //     var lname = $('#contact_form_lastname');
        //     var email = $('#contact_form_email');
        //     var message = $('#contact_form_message');
        //
        //     console.log('hello')
        //
        //     if(fname == ""){
        //         e.preventDefault();
        //         return false;
        //     }
        // });
        //
        // $('.job-submit').on('submit',function(e){
        //     var fname = $('#contact_form_firstname');
        //     var lname = $('#contact_form_lastname');
        //     var email = $('#contact_form_email');
        //     var message = $('#contact_form_message');
        //
        //     console.log('hello')
        //
        //     if(fname == ""){
        //         e.preventDefault();
        //         return false;
        //     }
        // });
    }

    //Window resize event
    window.onresize = myResize;
    myResize();
};

//Browser resize event
function myResize(){
    var bWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.width();
    var bHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || window.height();
}

//Get uploaded filename and check allowed file type
function getFileData(myFile) {
    var file = myFile.files[0];
    var filename = file.name;

    var ext = filename.split('.').pop();
    if (ext == "pdf" || ext == "docx" || ext == "doc") {
        $('.upload-filename').html("Fichier joint: " + filename);
        $('.upload-error').html("");
    } else {
        $('.upload-error').html("Ce type de fichier n'est pas accepté. Seulement les types .PDF, .DOCX et .DOC sont acceptés.");
        document.getElementById('contact_form_file').value = null;
        $('.upload-filename').html("");
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

$(document).ready(ready);
$(document).on('page:load', ready);
$(document).on('turbolinks:load', ready);