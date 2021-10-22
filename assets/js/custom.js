(function($) {


    // Nav - from HTML5Up Prologue theme
    var $nav = $('nav');
    var $nav_a = $nav.find('li>a');

    $nav_a
        .addClass('scrolly')
        .on('click', function(e) {

            var $this = $(this);

            // External link? Bail.
                if ($this.attr('href').charAt(0) != '#')
                    return;

            // Prevent default.
                e.preventDefault();

            // Deactivate all links.
                $nav_a.removeClass('active');

            // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this
                    .addClass('active')
                    .addClass('active-locked');

        })
        .each(function() {

            var	$this = $(this),
                id = $this.attr('href'),
                $section = $(id);

            // No section for this link? Bail.
                if ($section.length < 1)
                    return;

            // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    top: '-10vh',
                    bottom: '-10vh',
                    initialize: function() {

                        // Deactivate section.
                            $section.addClass('inactive');

                    },
                    enter: function() {

                        // Activate section.
                            $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                            if ($nav_a.filter('.active-locked').length == 0) {

                                $nav_a.removeClass('active');
                                $this.addClass('active');

                            }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                            else if ($this.hasClass('active-locked'))
                                $this.removeClass('active-locked');

                    }
                });

        });

    // Scrolly.
    $('.scrolly').scrolly();

    // Collapsible sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });

})(jQuery);