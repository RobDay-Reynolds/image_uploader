/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.1.3
 * @date      03-27-2012
 * @copyright (c) 2012 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.com/jquery-textfill/Example.htm
*/
(function($) {
  /**
  * Resizes an inner element's font so that the inner element completely fills the outer element.
  * @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
  * @return All outer elements processed
  */
  $.fn.textfill = function(options) {
    var defaults = {
      maxFontPixels: 40,
      minFontPixels: 4,
      innerTag: 'span',
      callback: null,
      complete: null,
      maxHeight: $(document).height() - 100,
      maxWidth: $(document).width()
    };
    var Opts = jQuery.extend(defaults, options);
    var maxHeight = Opts.maxHeight;
    var maxWidth = Opts.maxWidth;
    
    this.each(function() {
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var fontSize;
      
      var minFontPixels = Math.floor(Opts.minFontPixels);
      var maxFontPixels = Math.floor(Opts.maxFontPixels);
      while (minFontPixels <= maxFontPixels) {
        ourText.css('opacity: 0%;');
        if ((ourText.height() < maxHeight) && (ourText.width() <= maxWidth)) {
          minFontPixels++;
          fontSize = minFontPixels;
          ourText.css('font-size', fontSize);
        } else if (ourText.height() < (maxHeight - 200)) {
          minFontPixels++;
          fontSize = minFontPixels;
          ourText.css('font-size', fontSize);
        } else {
          fontSize = minFontPixels - 1;
          ourText.css('font-size', fontSize);
          maxFontPixels = minFontPixels - 1;
        }
      }
      ourText.css('opacity: 100%;');
      
      // call callback on each result
      if (Opts.callback) Opts.callback(this);
    });
    
    // call complete when all is complete
    if (Opts.complete) Opts.complete(this);
    
    return this;
  };
})(jQuery);
