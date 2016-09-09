jQuery(function($) {
    addAnimation($('#upAndDown'), configA);
    addAnimation($('#straight'), configB);
    addAnimation($('#stopAndGo'), configC);

    skrollr.init({
        smoothScrolling: false
    });
});


function addAnimation($el, config){
    var wrapper = $el.parent();
    var offset = config.end - config.start; //400 vanaf 100
    config.frames.forEach(function(frame){
        var px = config.start + (offset * frame.index)
        var css = 'transform: translate(' + frame.x +'%,' + frame.y + '%)'; 
        wrapper.attr('data-' + px, css);
    })
    //Make sure the element is hidden @ the start and end.
    $el.attr('data-' + config.start, 'transform: translateX(-100%)');
    $el.attr('data-' + config.end, 'transform: translateX(0%)');
}

var configA = {
    start: 100,
    end: 500,
    frames: [
        { index: 0,  x: 0, y: 50},
        { index: 0.2, x: 30, y: 50},
        { index: 0.4, x: 30, y: 30},
        { index: 0.6, x: 70, y: 30},
        { index: 0.8, x: 70, y: 50},
        { index: 1, x: 100, y: 50},
    ]
}

var configB = {
    start: 600,
    end: 1000,
    frames: [
        { index: 0,  x: 0, y: 40},
        { index: 1, x: 100, y: 40},
    ]
}

var configC = {
    start: 1000,
    end: 2000,
    frames: [
        { index: 0,  x: 0, y: 40},
        { index: 0.1, x:50, y:40},
        { index: 0.5, x:45, y:40},
        { index: 0.9, x:40, y:40},
        { index: 1, x: 100, y: 40},
    ]
}