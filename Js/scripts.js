$(document).ready(function(){
    $('[rel="tooltip"]').tooltip();
    if (!$('#ModalRe').is(':visible')) {
         $('[rel="tooltip"]').tooltip('hide');
    };

    $("#ModalRe").on('hidden.bs.modal', function(){
        $('[data-toggle="buttons"] :radio').prop('checked', false);
        $('[data-toggle="buttons"] label').removeClass('active');
        $('#reserv').trigger("reset");
    });

    $("#MyCarousel").carousel({interval: 1002});
    
    $('#modallogBtn').click(function(){
        $('#modallog').modal("show")
    });

    $('#ModalReBtn').click(function(){
        $('#ModalRe').modal("show")
    });

    $('#carouselBtn').click(function(){
        if($("#carouselBtn").children('span').hasClass("fa-pause")){
            $("#MyCarousel").carousel('pause');
            $("#carouselBtn").children('span').removeClass("fa-pause");
            $("#carouselBtn").children('span').addClass("fa-play");
        }
        else{
            $("#MyCarousel").carousel('cycle');
            $("#carouselBtn").children('span').removeClass("fa-play");
            $("#carouselBtn").children('span').addClass("fa-pause");
        };
    });
});