$(function() {
    $('.menu a').each(function() {
        if (this.href == document.location.toString().split('#')[0] || $(this).attr('href') == $('.sitemap a:eq(1)').attr('href') || $(this).attr('href') == $('.content').attr('data-cateurl')) {
            $(this).parents('li').addClass('on').parent('.subnav').prev().addClass('on');
            return false;
        }
    });
    $('.subnav a').each(function() {
        if (this.href == document.location.toString().split('#')[0] || $(this).attr('href') == $('.sitemap a:eq(1)').attr('href') || $(this).attr('href') == $('.content').attr('data-cateurl')) {
            $(this).addClass('on');
            return false;
        }
    });
    $('.subcate>a').click(function() {
        if (navigator.userAgent.match('Mobile') == null) {
            window.location.href = $(this).attr('href');
        } else {
            $(this).parent().toggleClass('slidedown').siblings().removeClass('slidedown');
            return false;
        }
    });
    $('.menu li>a').hover(function() {
        $(this).addClass('on');
    },function() {
        $(this).removeClass('on');
    });
    $('.menuico').on('click',function() {
        $(this).toggleClass('on');
        $('.menu,.fademask').toggleClass('on');
        if ($('.schfixed,.schbox').hasClass('on')) {
            $('.schfixed,.schbox').removeClass('on');
            $('.fademask').toggleClass('on');
        }
        if ($('.schico').hasClass('close')) {
            $('.schico').removeClass('close');
        }
    });
    $('.fademask').click(function() {
        $('.menu,.menuico,.fademask').removeClass('on');
        $('.schico').removeClass('close');
    });
    $(window).resize(function() {
        var _0x5ed191 = $(window).width();
        if (_0x5ed191 > 1080) {
            $('.menuico,.menu,.sch.schfixed,.fademask').removeClass('on');
            $('.schico').removeClass('close');
        }
    });
    $('.schico.statefixed').click(function(_0x26ebb6) {
        _0x26ebb6.stopPropagation();
        if ($('.menuico,.menu').hasClass('on')) {
            $('.menuico,.menu').removeClass('on');
            $('.fademask').toggleClass('on');
        }

        var _0x58e039 = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (_0x58e039) {
            $('html, body ').animate({'scrollTop ':0},0);
        }

        $(this).nextAll('.schfixed').toggleClass('on');
        $(this).toggleClass('close');
        $('.fademask').toggleClass('on');
        $('.schinput').focus();
    });
    $(document).click(function(_0x2b0e90) {
        var _0x13642a = $('.schfixed');
        if (!_0x13642a.is(_0x2b0e90.target) && _0x13642a.has(_0x2b0e90.target).length === 0) {
            $('.schfixed').removeClass('on');
        }
    });
    $(document).keyup(function(event) {
        switch (event.keyCode) {
            case 27:
                $('.menu,.menuico,.schico,.schfixed').removeClass('on');
                return false;
        }
    });
    $('.footnav li:first-child').addClass('noline');

    $('.userinfo,.sharebox,.casecon li').hover(function() {
        $(this).addClass('on');
    },function() {
        $(this).removeClass('on');
    });
    $('.weixin').hover(function() {
        $(this).find('span').show();
    },function() {
        $(this).find('span').hide();
    });
    $('#txaArticle').focus(function() {
        var _0x1f4fa8 = $('.cmtform .text').length;
        if (_0x1f4fa8 > 0) {
            $('.cmtform').slideDown();
        }
    });
    $('.itemtop li:first-child').addClass('on');
    $('.itemtop li').hover(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('#txaArticle').focus(function() {
        var _0x42a0d0 = $('.cmtinfo .text').length;
        if (_0x42a0d0 > 0) {
            $('.cmtinfo').slideDown();
        }
    });
    $('.playlist li').hover(function() {
            $(this).addClass('on');
        },
        function() {
            $(this).removeClass('on');
        });
    $('.playscroll').scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.episodeslist').addClass('show');
        } else {
            $('.episodeslist').removeClass('show');
        }
    });
    $('.episodeslist .return,.episodeslist .other').click(function() {
        $('.playscroll').scrollTop(0)
    });
    if (video.animation) {
        var _0x88775f = function() {
            var _0x3ba081 = 0;
            $('.fadebox').waypoint(function(_0x7fee57) {
                    if (_0x7fee57 === 'down' && !$(this.element).hasClass('animated')) {
                        _0x3ba081++;
                        $(this.element).addClass('item-animate');

                        setTimeout(function() {
                            $('.fadebox').css('opacity', 'unset');
                            $('body .fadebox.item-animate').each(function(_0x29c910) {
                                setTimeout(function() {
                                    $(this).addClass('fadeInUp animated');
                                    $(this).removeClass('item-animate')
                                },
                                    _0x29c910 * 200, 'easeInOutExpo')
                            })
                        },100)
                    }
                },
                {
                    'offset': '100%'
                });
        };
        _0x88775f();
    } else {
        $('.fadebox').css('opacity', '1')
    }
    if (video.lazyload) {
        $('img').lazyload({
            'placeholder': 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            'effect': 'fadeIn',
            'threshold': 200
        })
    }
    if(video.removep){
        $('.articlecon p').each(function(){
            var _0x346eb4=$(this).html();
            if(_0x346eb4==='&nbsp;'||_0x346eb4==='<br>'||_0x346eb4===' '){
                $(this).remove()
            }
        })
    }
    if (video.selectstart) {
        copyright();
    }
    if (video.logoanimate) {
        var _0x5c8996 = !![];
        $('.logo').hover(function() {
            var _0x27957f = 0;
            if (_0x5c8996) {
                var _0x74e8f2 = setInterval(function() {
                    if (_0x27957f >= 180) {
                        clearInterval(_0x74e8f2);
                        _0x5c8996 = !![]
                    } else {
                        _0x5c8996 = ![];
                        _0x27957f++;
                        $('.logo a').attr('style', '-webkit-mask:-webkit-gradient(radial, 90 40, '+ _0x27957f + ', 90 40, ' + _0x27957f + 15 + ', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0));');
                    }
                },1)
            }
        },function() {
            return;
        })
    }
    // if (video.backtotop) { (function() {
    //     var _0x3730d4 = $('<a class="backtotop"><i></i></a>').appendTo($('body')).attr('title', '杩斿洖椤堕儴').click(function() {
    //             $('html, body').animate({
    //                     'scrollTop': 0
    //                 },
    //                 100)
    //         }),
    //         _0x407ab4 = function() {
    //             var _0x7096c5 = $(document).scrollTop(),
    //                 _0x9e3eda = $(window).height();
    //             _0x7096c5 > 500 ? _0x3730d4.show() : _0x3730d4.hide();
    //             if (!window.XMLHttpRequest) {
    //                 _0x3730d4.css('top', _0x7096c5 + _0x9e3eda - 166)
    //             }
    //         };
    //     $(window).bind('scroll', _0x407ab4);
    //     _0x407ab4()
    // } ())
    // }
    if ($('.swiper-container .swiper-slide').size() != 1) {
        if (video.slideeffect) {
            var _0x2662a8 = new Swiper('.swiper-container', {
                'pagination': '.swiper-pagination',
                'paginationClickable': true,
                'slidesPerView': 1,
                'spaceBetween': 0,
                'autoplay': 2500,
                'loop': true,
                'prevButton': '.swiper-button-prev',
                'nextButton': '.swiper-button-next',
                'effect': 'fade'
            })
        } else {
            var _0x2662a8 = new Swiper('.swiper-container', {
                'pagination': '.swiper-pagination',
                'paginationClickable': true,
                'slidesPerView': 1,
                'spaceBetween': 0,
                'autoplay': 2500,
                'loop': true,
                'prevButton': '.swiper-button-prev',
                'nextButton': '.swiper-button-next'
            })
        }
    } else {
        var _0x2662a8 = new Swiper('.swiper-container', {
            'pagination': 'null',
            'prevButton': 'null',
            'nextButton': 'null'
        });
        $('.swiper-button-prev,.swiper-button-next').hide();
    }

});