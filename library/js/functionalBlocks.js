$(function (){
    $('.leftBlock, .rightBlock').css( 'height', $( '.contentBlock' ).outerHeight());
});

function blockClose( blocks, obj ) {
    $( 'body' ).toggleClass( blocks );
}

$( window ).resize( function (){
    $('.leftBlock, .rightBlock').css( 'height', $( '.contentBlock' ).outerHeight() );
});
