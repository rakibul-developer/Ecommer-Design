$(document).ready(function() {
    // Hide all content sections initially except the first one
    $('.my-order, .faq').hide();
    $('.flex.flex-col.gap-4').show();

    // Add click handlers to tabs
    $('.tab').click(function() {
        // Remove active class from all tabs
        $('.tab').removeClass('active');
        // Add active class to clicked tab
        $(this).addClass('active');
        
        // Get the index of clicked tab
        var index = $(this).index();
        
        // Hide all content sections
        $('.flex.flex-col.gap-4, .my-order, .faq').hide();
        
        // Show corresponding content based on tab index
        if(index === 0) {
            $('.flex.flex-col.gap-4').show();
        } else if(index === 1) {
            $('.my-order').show();
        } else if(index === 2) {
            $('.faq').show();
        }
    });
});