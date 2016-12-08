var dfpslots = $("body").find(".advertisement").filter(":visible"),
    i = 0,
    slot = [],
    _this,
    tmp,
    mapping;

if (dfpslots.length) {
    /* $(dfpslots).each(function(){
      _this = $(this).find("div");
      if ( _this.length ) console.log(_this, _this.data('dfp'), _this.data("size"), _this.attr('id'));
    }); */
    googletag.cmd.push(function() {
        $(dfpslots).each(function(){
            _this = $(this).find("div");
            if ( _this.length ) {
                tmp = eval(_this.data("mappingargs"));
                mapping = ( !_this.data("mapping") )? 'null':tmp;
                // console.log(_this.parent().attr('id'))
                slot[i] = googletag.defineSlot('/4054/'+_this.data('dfp'), _this.data("size"), _this.attr('id'))
                    .defineSizeMapping(mapping)
                    .addService(googletag.pubads())
                    .setTargeting('pos', _this.data("pos"))
                    .setTargeting('tile', _this.data("tile"))
                    .setTargeting('rb', _this.data("rb"))
                    .setCollapseEmptyDiv(true);
            }
            // if ($(this).attr('data-cids')) slot[i].set("adsense_channel_ids", $(this).attr('data-cids'));
            i++;
        });

        //googletag.pubads().enableSingleRequest(); // Breaks channel reporting
        googletag.enableServices();

        $(dfpslots).each(function(){
            _this = $(this).find("div");
            googletag.display(_this.attr('id'));
        });
    });
}