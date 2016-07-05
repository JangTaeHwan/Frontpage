var $ = jQuery.noConflict();
var bgRunning = false;
var bgTimer;
var useFullImage = false;
var useFitMode = false;
var hasTouch = 'ontouchstart' in window;
var bgPaused= false; // Background Image/Video animation paused
var bgTime = 7000; // Background Image/Video animation display duration (ms)
var NormalFade = true; // Normal fade or animated bg image
var loopBg = true;
var bgPatternV = 'block';
var bgControllerV = 'block';
var bgStretch = true;
var tempThumbs = '';
var tempActive = '';
var minWidth = 900;
var minHeight = 500;
var mobileDevice = false;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
    mobileDevice = true;
}

$(window).bind('load', init);

function init() {
    if ($.browser.msie && parseFloat($.browser.version) <= 7) {
        $('#loading').html('Sorry, your browser is too old to display this new generation HTML5 web site :(');
        return false;
    }
	
    if (!document.createElement('audio').canPlayType) {
        $('#footeraudio .soundplaylist').hide();
        $('#footeraudio .soundicon').hide();
        $('#footeraudio .soundmute').hide();
    }
    $(window).bind('resize', function() {
        doSize();
    });
    $(window).bind('scroll', function() {
        doSize();
    });
    if (mobileDevice) {
        $('#thumbOpener').show().click(function() {
            if (parseInt($('#bgImages').css('bottom')) < 30) {
                $('#thumbOpener').animate({
                    bottom: 130
                }, 300);
                galeriThumbsMoveUp();
                $('#bgImages').bind('touchstart', bgThumbsTouchStart);
            } else {
                $('#thumbOpener').animate({
                    bottom: 45
                }, 300);
                $('#bgImages').unbind('touchstart', bgThumbsTouchStart);
                galeriThumbsMoveDown();
            }
        });
    }
    if (mobileDevice) {
        bgPatternV = 'none';
        $('#bgPattern').hide();
    }
    if (!mobileDevice) {
        $(document).bind('mousemove', galeriThumbsMouseMove);
    }
    doSize();
	
    $('#bodyLoading').animate({
        opacity: '0',
        top: -200
    }, 1000, 'easeOutBack', function() {
        $(this).remove();
    });
    $('#body-wrapper').delay(500).animate({
        opacity: '1'
    }, 1000);
	
    galleryThumbs();

}
jQuery.fn.extend({
    contentPageReady: function(fn) {
        if (fn) {
            return jQuery.event.add(document, "contentPageReady", fn, null);
        } else {
            var ret = jQuery.event.trigger("contentPageReady", null, document, false, null);
            if (ret === undefined)
                ret = true;
            return ret;
        }
    }
});

function galeriThumbsMouseMove(e) {
    galeriThumbsHorizontalMove(e.pageX);
    if (e.pageY > $('#bgImages').position().top - 10 && parseInt($('#bgImages').css('bottom')) < 32)
        galeriThumbsMoveUp();
    else if (e.pageY < $('#bgImages').position().top - 10)
        galeriThumbsMoveDown();
}

function galeriThumbsHorizontalMove(param_pageX) {
    if ((parseInt($('#bgImages').css('bottom')) > -40 && $('#bgImages').width() > $('#body-wrapper').width())) {
        var posTop = parseInt((($('#body-wrapper').width() - $('#bgImages').width()) / $('#body-wrapper').width()) * param_pageX);
        if (posTop > 0)
            posTop = 0;
        $('#bgImages').animate({
            left: posTop
        }, {
            queue: false,
            duration: 400,
            easing: 'easeOutQuad'
        });
    }
}

function galeriThumbsMoveUp() {
    $('#bgImages').animate({
        bottom: 32
    }, {
        queue: false,
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() {}
    });
    $('#bgText').animate({
        bottom: 147
    }, {
        queue: false,
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() {}
    });
}

function galeriThumbsMoveDown() {
    $('#bgImages').animate({
        bottom: -50
    }, {
        queue: false,
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() {}
    });
    $('#bgText').animate({
        bottom: 64
    }, {
        queue: false,
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() {}
    });
}

function galleryThumbs(activeItem, mode) {
    $('#bgImages li a').live('click', function() {
        return false;
    });
    var totalBgImagesWidth = 0;
    $('#bgImages li img.thumb').each(function() {
        totalBgImagesWidth += $(this).width() + 6;
    });
    totalBgImagesWidth += 2;
    $('#bgImages').css('width', totalBgImagesWidth + 'px');
    $('#bgImages li').hover(function() {
        $(this).find('img.thumb').stop().animate({
            opacity: '1'
        }, 500);
        $(this).find('.thumbType').stop().animate({
            opacity: '1'
        }, 500);
    }, function() {
        if (!$(this).hasClass('active')) {
            $(this).find('img.thumb').stop().animate({
                opacity: '.3'
            }, 500);
		}
		$(this).find('.thumbType').stop().animate({
			opacity: '0'
		}, 500);
    }).click(function() {
        if (!$(this).hasClass('active') && !bgRunning) {
            clearInterval(bgTimer);
            $('#bgImages li').removeClass('active');
            $(this).addClass('active');
            runBg();
        }
    });
    $('#bgImages li').each(function() {
		$(this).append($('<div></div>').addClass('thumbType thumbImage').css('opacity', '0'));
    });
    if (activeItem == undefined) {
        if ($('#bgImages li.active').length != 1) {
            $('#bgImages li').removeClass('active');
            $('#bgImages li:first-child').addClass('active');
        }
    } else {
        $('#bgImages li').removeClass('active');
        $('#bgImages li a[href="' + activeItem + '"]').parent().addClass('active');
        if ($('#bgImages li.active').length != 1) {
            $('#bgImages li').removeClass('active');
            $('#bgImages li:first-child').addClass('active');
        }
    }
    $('#bgImages').css('left', '0px');
    runBg();
}


var winW = $(window).width();
var winH = $(window).height();
var contentWidth = 640;

function doSize() {
    winW = $(window).width();
    winH = $(window).height();
    if (mobileDevice) {
        if (winW < minWidth)
            winW = minWidth;
        if (winH < minHeight)
            winH = minHeight;
    }
    var winRatio = winW / winH;
    $('#body-wrapper').css({
        width: winW + 'px',
        height: winH + 'px'
    });

	var imgWO = parseInt($('#bgImage img.new').attr('width'));
	var imgHO = parseInt($('#bgImage img.new').attr('height'));
    
    var imgRatio = imgWO / imgHO;
    var imgLeft = 0;
    var imgTop = 0;
    if ((winRatio > imgRatio)) {
        var imgW = parseInt(winW);
        var imgH = parseInt(imgW / imgRatio);
    } else {
        var imgH = winH;
        var imgW = parseInt(imgH * imgRatio);
    }
    if ((winRatio > imgRatio)) {
        var imgHF = parseInt(winH);
        var imgWF = parseInt(imgHF * imgRatio);
    } else {
        var imgWF = parseInt(winW);
        var imgHF = parseInt(imgWF / imgRatio);
    }
    var newImageW = 0;
    var newImageH = 0;
    if (!useFullImage && bgStretch) {
        newImageW = imgW;
        newImageH = imgH;
    } else {
        if (!useFullImage && !bgStretch) {
            newImageW = imgWF;
            newImageH = imgHF;
        } else if (!useFitMode) {
            newImageW = imgWO;
            newImageH = imgHO;
        } else {
            newImageW = imgWF;
            newImageH = imgHF;
        }
    }
    if ($('#bgImages').width() < $('#body-wrapper').width()) {
        $('#bgImages').css('left', (($('#body-wrapper').width() - $('#bgImages').width()) / 2) + 'px');
    }
    if (useFullImage && !(activePlayer == 'none' || activePlayer == 'flash')) {
        imgLeft = imgTop = 0;
    } else if (!useFullImage && !bgStretch && !(activePlayer == 'none' || activePlayer == 'flash')) {
        imgLeft = imgTop = 0;
    } else {
        imgLeft = parseInt((winW - newImageW) / 2);
        imgTop = parseInt((winH - newImageH) / 2);
    }
    if (!bgRunning)
        $('#bgImage .new').stop(true).animate({
            left: imgLeft,
            top: imgTop,
            width: newImageW,
            height: newImageH
        }, {
            queue: false,
            duration: 500
        });
    else
        $('#bgImage .new').stop(true).css({
            left: imgLeft + 'px',
            top: imgTop + 'px',
            width: newImageW + 'px',
            height: newImageH + 'px'
        });
    $('#bgPattern').css({
        width: winW + 'px',
        height: winH + 'px'
    });
    $('#videoExpander').css({
        width: winW + 'px',
        height: winH + 'px'
    });
    setContentHeight();
    $('#playList').css({
        width: winW + 'px',
        height: winH + 'px'
    });
    $('#playWrapper').css({
        left: ((winW - $('#playWrapper').width()) / 2) + 'px',
        top: ((winH - $('#playWrapper').height()) / 2) + 'px'
    });
}

function setContentHeight() {
    if (!mobileDevice) {
        $('#content').css({
            left: ((winW - contentWidth) / 2) + 'px',
            height: (winH - $('#footer').height() - 89) + 'px'
        });
        $('#contentBoxScroll').css({
            height: ($('#content').height() + 40) + 'px',
            left: (((winW - contentWidth) / 2) + contentWidth) + 'px'
        });
    } else {
        $('#content').css({
            left: 'auto',
            right: '47px',
            top: '80px',
            height: (winH - $('#footer').height() - 139) + 'px'
        });
        $('#contentBoxScroll').css({
            height: ($('#content').height() + 40) + 'px',
            left: 'auto',
            right: '20px',
            top: '80px'
        });
    }
    if ($('#contentBoxContainer').height() < $('#content').height()) {
        $('#content').css({
            height: $('#contentBoxContainer').height() + 'px'
        });
        $('#contentBoxScroll').css({
            height: ($('#content').height() + 40) + 'px'
        });
    }
    $('#contentBox').css({
        height: ($('#content').height()) + 'px'
    });
    $('#contentBoxScroll .dragcontainer').height($('#contentBoxScroll').height() - 32);
}

function autoBg() {
    if (bgPaused) return false;
    nextBg();
}

function nextBg() {
    if (bgRunning) return false;
    clearInterval(bgTimer);
    if (!$('#bgImages li.active').is(':last-child')) {
        $('#bgImages li.active').removeClass('active').next().addClass('active');
        runBg();
    } else if (loopBg) {
        $('#bgImages li.active').removeClass('active').parent().find('li:first-child').addClass('active');
        runBg();
    }
}

function prevBg() {
    if (bgRunning) return false;
    clearInterval(bgTimer);
    if (!$('#bgImages li.active').is(':first-child'))
        $('#bgImages li.active').removeClass('active').prev().addClass('active');
    else
        $('#bgImages li.active').removeClass('active').parent().find('li:last-child').addClass('active');
    runBg();
}

function pauseBg() {
    clearInterval(bgTimer);
    $('#bgControl .play').show();
    $('#bgControl .pause').hide();
    bgPaused = true;
    $('#bgImage img.new').stop();
}

function playBg() {
    clearInterval(bgTimer);
    $('#bgControl .play').hide();
    $('#bgControl .pause').show();
    bgPaused = false;
	nextBg();
}

var kburnsEffrects = ['zin', 'mup', 'mleft', 'zout', 'mdown', 'mright'];
var curEffrect = kburnsEffrects.length;
var activePlayer = 'none';

function runBg() {
    if ($('#bgImages li').length <= 0) return false;
    activeNo = 0;
    $('#bgImages li').each(function(index, value) {
        if ($(this).hasClass('active'))
            activeNo = index + 1;
    });
    $('#bgControlCount').text(activeNo + '/' + $('#bgImages li').length);
    $('#bgImageWrapper .source').removeClass('new').addClass('old');
	curEffrect = (curEffrect+1) % kburnsEffrects.length;
	
	bgRunning = true;
	$('#bgImageWrapper').prepend($('<img src="' + $('#bgImages li.active a').attr('href') + '" />').addClass('new source ' + kburnsEffrects[curEffrect]).css('opacity', '0'));
	
	$('#bgImageWrapper img.new').load(function() {
		$(this).css('opacity', '0');
		$(this).attr('width', $(this).width());
		$(this).attr('height', $(this).height());
		doSize();
		clearInterval(bgTimer);
		runBgAni();
	}).error(function() {
		bgRunning = false;
		nextBg();
	}).dequeue();
	if (mobileDevice)
		$('#videoExpander').hide();
    
}

function runBgAni() {
    clearInterval(bgTimer);
    $('#bgText').stop(true).animate({
        clip: 'rect(0px, ' + $('#bgText').width() + 'px, ' + ($('#bgText').height() + 20) + 'px, ' + $('#bgText').width() + 'px)'
    }, 800, 'easeOutQuad', function() {
        $('#bgText .topText').html($('#bgImages li.active div').text());
        $('#bgText .headerText').html($('#bgImages li.active h3').text());
        $('#bgText .subText').html($('#bgImages li.active p').text());
        $('#bgText').css('clip', 'rect(0px, 0px, ' + ($('#bgText').height() + 20) + 'px, 0px)');
        
        var formId = $('#bgImages li.active form').attr('id');
		$('#headerLink').attr('onclick','$("#' + formId + '").submit();');
		
        $('#bgText').animate({
            clip: 'rect(0px, ' + $('#bgText').width() + 'px, ' + ($('#bgText').height() + 20) + 'px, 0px'
        }, 800, 'easeOutQuad');
    });
    $('#bgImages li img').stop().animate({
        opacity: '.4'
    }, 500);
    $('#bgImages li.active img').stop().animate({
        opacity: '1'
    }, 500);
    if ($('#bgImageWrapper .old').length > 0) {
        $('#bgImageWrapper .old').stop(true).animate({
            opacity: 0
        }, 500, function() {
            $(this).remove();
            bgRunning = false;
        });
    } else {
        bgRunning = false;
    }
    if (!NormalFade) {
        $('#bgImageWrapper .new').css('opacity', '1');
        if (activePlayer == 'none' && !useFullImage) {
            var beforeAniLeft = $('#bgImageWrapper .new').css('left');
            $('#bgImageWrapper .new').css('left', '-' + $('#bgImageWrapper .new').width() + 'px');
            $('#bgImageWrapper .new').animate({
                left: beforeAniLeft
            }, 600, 'easeOutQuad');
        }
    } else {
        $('#bgImageWrapper .new').css('opacity', '0');
        $('#bgImageWrapper .new').animate({
            opacity: '1'
        }, 5000, 'easeOutQuad');
    }
    setBgTimer();
}

function setBgTimer() {
    if (bgTime > 0 && bgPaused == false && activePlayer == 'none')
        bgTimer = setInterval(autoBg, bgTime);
}