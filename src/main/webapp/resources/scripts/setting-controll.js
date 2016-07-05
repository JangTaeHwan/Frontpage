(function($, window) {
    $(document).ready(function() {
        function switcherVisibility() {
            if ($(window).width() < 960) {
                $('#sw-main-box').hide();
            } else {
                $('#sw-main-box').show();
            }
        }
        switcherVisibility();
        $(window).on('resize', function() {
            switcherVisibility();
        })

        function mk_switcher() {
            $("#sw-main-box").click(function(event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else if (window.event) {
                    window.event.cancelBubble = true;
                }
            });
            $('#sw-open-icon').on('click', function() {
                if (!$(this).hasClass('mk-switcher-active')) {
                    $('#sw-main-box').addClass('mk-slide');
                    $(this).addClass('mk-switcher-active');
                    floatingRightPreviewHide();
                    $('i', this).addClass('sw-icon-spin');
                } else {
                    $(this).removeClass('mk-switcher-active');
                    $('i', this).removeClass('sw-icon-spin');
                    $('#sw-main-box').removeClass('mk-slide');
                }
                return false;
            });
            $("html").click(function() {
                $('#sw-main-box').removeClass('mk-slide');
                $('#sw-open-icon').removeClass('mk-switcher-active');
                $('#sw-open-icon i').removeClass('sw-icon-spin');
                floatingRightPreviewHide();
            });
            $(".sw-btn").on('click', function() {
            	var data = $(this).attr('data-name');
            	if(data == 'load') return;
                $(this).toggleClass('mk-active');
                if($(this).hasClass('mk-active')){
	            	if(data == 'general'){
	            		$(".sw-btn").removeClass('mk-active');
	            		$("#general").addClass('mk-active');
	            	}
	            	else{
	            		$("#general").removeClass('mk-active');
	            	}	
                }
                return false;
            });
            
            // post 요청 부분
            function post_to_url(url, params) {
                var form = document.getElementById('dynamic-form');
                form.action = url;
                form.method = 'POST';

                for (var i in params) {
                    if (params.hasOwnProperty(i)) {
                        var input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = i;
                        input.value = params[i];
                        form.appendChild(input);
                    }
                }

                form.submit();
            }
            
            function set_param_post(url){	            	
            	var startYear = parseInt($('#start-year').val());
            	var startMonth = parseInt($('#start-month').val());
            	var endYear = parseInt($('#end-year').val());
            	var endMonth = parseInt($('#end-month').val());
            	var category_len = $('#categories > a').size();
            	var category = new Array();
            	
            	if(startYear == '2015' && startMonth > 2){
            		alert("시작 시점을 2015년 3월 이전으로 설정해야 합니다.");
            		return;
            	}
            	if(startYear > endYear){
            		alert("종료 시점을 시작 시점 이후로 설정해야 합니다.");
            		return;
            	}
            	if(startYear == endYear && startMonth > endMonth){
            		alert("종료 시점을 시작 시점 이후로 설정해야 합니다.");
            		return;
            	}

            	for(var i = 1; i <= category_len; i++){
            		if($('#categories > a:nth-child(' + i + ')').hasClass("mk-active")) category.push(1);
            		else category.push(0);
            	}
            
            	var parameters = 
            	{
	            	"startYear": startYear,
	            	"startMonth": startMonth,
	            	"endYear": endYear,
	            	"endMonth": endMonth,
	            	"pageIndex": 1,
	            	"categoryIdx": category
            	}

            	post_to_url(url, parameters);
            }
            
            // 가져오기 버튼
            $("#article-load").click(function(){
            	set_param_post("/Frontpage/"+seturl);
            });
            // post 요청 끝
            
            $('.sw-patterns a').click(function() {
                var image = $(this).attr('data-image');
                $(this).parent().siblings().removeClass('active').end().addClass('active');
                $('body').css({
                    'background': 'url(' + image + ') top left repeat fixed'
                });
                return false;
            });
            $('.sw-images a').click(function() {
                var image = $(this).attr('data-image');
                $(this).parent().siblings().removeClass('active').end().addClass('active');
                $('body').css({
                    'background': 'url(' + image + ') top left repeat fixed'
                });
                return false;
            });
            
            var floatRight = $('.sw-floating-right-expanded');
            var floatRightWidth = floatRight.width();
            var floatRightHeight = floatRight.height();

            function floatingRightPreviewShow() {
                $('#sw-open-icon').removeClass('mk-switcher-active');
                $('i', '#sw-open-icon').removeClass('sw-icon-spin');
                $('#sw-main-box').removeClass('mk-slide');
                new TimelineLite().to(floatRight, 0, {
                        width: 90,
                        height: 65,
                        display: 'block',
                        opacity: 1
                    }) // .to(floatRight, .1, { opacity: 1 })
                    .to(floatRight, .2, {
                        height: floatRightHeight,
                        width: floatRightWidth
                    }, "+=.1").to(floatRight.find('.sw-floating-right-title'), .1, {
                        opacity: 1
                    }, "-=.1").staggerTo(floatRight.find('li'), .7, {
                        opacity: 1
                    }, .03);
            }

            function floatingRightPreviewHide() {
                new TimelineLite().to(floatRight.find('.sw-floating-right-title, li'), .1, {
                    opacity: 0
                }).to(floatRight, .2, {
                    width: 90,
                    height: 65
                }).to(floatRight, .1, {
                    opacity: 0
                }).to(floatRight, 0, {
                    display: 'none'
                });
            }
            var $slider = $('.sw-floating-carousel');
            var $slide = 'img';
            var $transition_time = 1000;
            var $time_between_slides = 3000;
            var before = new Date();

            function slides() {
                return $slider.find($slide);
            }
            slides().fadeOut();
            slides().first().addClass('active').fadeIn($transition_time);

            function autoScroll() {
                var $i = $slider.find($slide + '.active').index();
                slides().eq($i).removeClass('active').fadeOut($transition_time);
                if (slides().length == $i + 1) $i = -1;
                slides().eq($i + 1).addClass('active').fadeIn($transition_time, function() {
                    setTimeout(autoScroll, $time_between_slides);
                });
            }
            $(window).load(function() {
                autoScroll();
            });
            $('.sw-floating-right-overlay').on('click', function() {
                floatingRightPreviewShow();
                return false;
            });
            $('.sw-floating-right-title').on('click', function() {
                floatingRightPreviewHide();
                return false;
            });
            $('.has-mega-menu .preview a').hover(function() {
                $(this).parent().addClass('is-active');
            }, function() {
                $(this).parent().removeClass('is-active');
            });
        }
        mk_switcher();
    });
})(jQuery, window);