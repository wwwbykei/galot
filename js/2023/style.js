
//navigation
function navCollapse(){//sub menu mobile
    if( $( window ).width() <= 1180 ){
        $( ".nav-gnb > ul > li:not(.nochild)" ).click( function(){
            $( ".nav-gnb > ul > li:not(.nochild)" ).removeClass( "active" );
            $( this ).addClass( "active" );
        });
    }else{
        $( "body, .nav-menu, .nav-gnb > ul > li:not(.nochild), .bg-close" ).removeClass( "active" );
    }
};
function navBtn(){
    $( ".nav-btn,.nav-search" ).click( function(){
        $( "body,.nav-menu,.bg-close" ).toggleClass( "active" );
    });
    $( "header" ).append( "<div class='bg-close'></div>" );
    $( ".nav-menu" ).bind( 'webkitTransitionEnd otransitionend oTransitionEnd transitionend', function() {
        $( ".bg-close, .nav-close" ).click( function(){
            $( "body, .nav-menu, .bg-close" ).removeClass( "active" );
        });
    });
};

//상단 메뉴 고정 - 231109 추가
function navSticky(){
	if ($(window).scrollTop() > 50) {
		$('#js-sticky').addClass('sticky');
	}
	else{
		$('#js-sticky').removeClass('sticky');
	}
}

//tooltip
function tooltip(){
	$( ".tooltip" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom']
	});
	$( ".tooltip-top" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['top', 'right', 'left', 'bottom']
	});
	$( ".tooltip-bottom" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['bottom', 'top', 'right', 'left']
	});
    $( ".tooltip-arrowless:not(.disabled)" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
	    theme: ['tooltipster-arrowless'],
	    arrow: false
	});
	$( ".tooltip-clickable" ).tooltipster({
		contentCloning: true,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
		trigger: 'custom',
		interactive: true,
		contentAsHTML: true,
		triggerOpen: {
		    mouseenter: true
		},
		triggerClose: {
		    mouseleave: true
		}
	});
	$( ".tooltip_templates a" ).on('click', function() {
		$(".tooltip_templates").hide();
	});
}

function setHiddenBtn(){
	if ( $(this).scrollTop() > 100 ) {
		$( ".btn-show-scroll" ).fadeIn();
	}else{
		$( ".btn-show-scroll" ).fadeOut();
	}
};
function setBtntop(){
	$( "a[href='#top']" ).click(function(){
        $('html,body').animate({ scrollTop:0 }, 100 );return false;
    });
};

//숫자 증가 모션 - 231109 추가
function count(element, start, end, duration) {
	let current = start;
	const range = end - start;
	const increment = range / (duration / 10);
	const stepTime = 50; // 10ms 마다 증가하도록 설정

	let timer = setInterval(function() {
		current += increment;
		if (current >= end) {
			clearInterval(timer);
			current = end;
		}
		element.textContent = formatNumber(current, end);
	}, stepTime);
}

//숫자 3자리씩 쉼표 처리 - 231109 추가
function formatNumber(number, end) {
	if (Number.isInteger(end)) {
		return number.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	} else {
		return number.toFixed(1);
	}
}

//숫자 증가, 3자리 처리 - 231109 추가
function countNumber(){
	const countArea = document.getElementById('count-area');
	const countAreaPosition = countArea.getBoundingClientRect().top;
	const screenPosition = window.innerHeight;

	if (countAreaPosition < screenPosition / 2) { // 요소가 반이상 보였을 때 실행
		//홈 화면 > 아카이브 카운트
		indexArchiveCount();

		// 이벤트 리스너 삭제
		window.removeEventListener('scroll', arguments.callee);
	}
}

//fade up 모션 - 231109 추가
function aosInit(){
	AOS.init({
		disable: false,
		offset: 300,
		duration: 1300,
		easing: 'ease',
		once: true,
		delay: 200,
	});
}

// 스크롤 이벤트 리스너 - 231109 추가
window.addEventListener('scroll', function() {
	
});

$( document ).ready( function(){
	navCollapse();
	navBtn();
	setBtntop();
});

$( window ).resize( function(){
    navCollapse();
});

$( window ).load( function(){
    tooltip();
});

$( window ).scroll( function(){
	setHiddenBtn();
	navSticky();//231109 추가
	countNumber();//231109 추가
	aosInit();//231109 추가
});