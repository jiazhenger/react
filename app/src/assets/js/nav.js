import $ from 'jquery';
export default ()=>{
	let $nav = $('#navigation');
	let $snav = $('#smallNav');
	// 展开收缩目录
	$nav.find('.js-tit').click(function(){
		if($(this).next().css('display') === 'none'){
			$(this).addClass('active').next().fadeIn(200)
		}else{
			$(this).removeClass('active').next().fadeOut(200)
		}
		return false;
	})
	// 刷新判断当前页面
	$nav.find('a').each(function(){
		if($(this).hasClass('active')){
			$(this).parents('nav').fadeIn(200).prev().addClass('active');
			$(this).parents('menu').fadeIn(200).prev().addClass('active');
		}
	})
	// 显示导航
	$snav.click(function(){
		$nav.addClass('show');
		return false;
	})
	// 隐藏导航
	$('body').click(function(){
		if($snav.css('display') !== 'none'){
			$nav.removeClass('show');
		}
	})
}
