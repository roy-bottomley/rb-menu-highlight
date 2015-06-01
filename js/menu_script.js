/**
 * Highlights a <div> with the class .menu-rb-highlight
 * Hightlight by increasng the font size on mouse over
 * returns font size to normal on mouse leave
 */
jQuery(document).ready(function() {
    // menuRbHighlighFontsize is a hash holding the original font sizes on items which have been highlighed
    // held here as assumed the number of links to highlight is small and so keeps the code simple
    var menuRbHighlighFontsize = {};
    var menuRbZoomFactor = 1.3;
    jQuery(function(){
        jQuery('.menu-rb-highlight a').hover(function(){
                jQuery(this).stop(true, true);
                if (!menuRbHighlighFontsize[this])  {
                    menuRbHighlighFontsize[this] =  parseInt(jQuery(this).css('font-size'));
                }
                jQuery(this).animate({'z-index':'1','font-size': (menuRbHighlighFontsize[this] * menuRbZoomFactor).toString() + 'px'},50);
            },
            function(){
                jQuery(this).stop(true, true);
                if (menuRbHighlighFontsize[this]) {
                    jQuery(this).animate({'z-index': '0', 'font-size': menuRbHighlighFontsize[this] + 'px'}, 50);
                }
            });
    });
});
