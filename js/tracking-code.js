(function($) {
    "use strict"; // Start of use strict
    mixpanel.track("HomePage");
    debugger;
    $('a.email-link').on('click', function(event) {
      mixpanel.track("ClickEmail");
    });
    
    $('a.facebook-link').on('click', function(event) {
      mixpanel.track("ClickFacebook");
    });
    
    $('a.linkedin-link').on('click', function(event) {
      mixpanel.track("ClickLinkedIn");
    });
})(jQuery); // End of use strict
