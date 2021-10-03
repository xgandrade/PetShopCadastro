var menuWrapper = $('.menu');
var menuButton = $('.menu .menubutton');
var menuItems = $ ('.menu ul li a');
var listItem = $('.menu ul li');

var tekstSpeed = 350;
var sizeSpeed = 300;


// this will toggle all the menu items at the same time,
toggleAll = function(){
		if(!menuWrapper.hasClass('toggled')){
// 	 picks the longes element in width and scale the div around that to that size
			var width = 0;
			menuItems.each(function(){
				var thisWidth = $(this).width();
				if(thisWidth > width){
					width = thisWidth;
				}
			});
			width = width + 100;
		}
		else{
			var width = 100;
		}
		menuWrapper.animate({width: width}, sizeSpeed);	
		
// 	toggles the items that have not been toggled yet, and removes the clicktoggled class from the already toggled items.
		menuItems
			.not($('.menu ul li a.clicktoggled'))
			.animate({opacity: 'toggle'}, tekstSpeed);
		menuWrapper.toggleClass('toggled');
		menuItems.removeClass('clicktoggled');
		listItem.removeClass('listActive');
}

// when the icons are clicked, one will pop open, the otherone will close.
singleClicked = function(){
	if(!menuWrapper.hasClass('toggled')){
		
// 		makes the wrapper the same widht of the new clicked item.
		if(!$('a', $(this)).hasClass('clicktoggled')){
			var newLength = $('a', $(this)).width();
			var newWidth = newLength + 100;
		}
		else{
			var newWidth = 100;
		}		
		menuWrapper.animate({width: newWidth}, sizeSpeed);
		
// 	when clicked it wil toggle the clicked list item and will close the already toggled one.
		$('a', $(this))
			.animate({opacity: 'toggle'}, tekstSpeed)
			.toggleClass('clicktoggled');
		$('a.clicktoggled', listItem.not(this)).each(function(){
				$(this)
					.removeClass('clicktoggled')
					.animate({opacity: 'toggle'}, tekstSpeed);
		});		
		$((this))
			.toggleClass('listActive');
		listItem.not(this).each(function(){
				$(this)
					.removeClass('listActive')
		});
	}
}


//  activate  functions

setTimeout(function() { toggleAll(); }, 1000);
menuButton.click(toggleAll);
listItem.click(singleClicked);
$(document).keyup(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
			if(menuWrapper.hasClass('toggled')){
				toggleAll();
			}
	}
});
$('.content').click(function(){
	if(menuWrapper.hasClass('toggled')){
		toggleAll();
	}																	
});

// after login
function afterLogin(){
  href="cadastro_produto.html"
}