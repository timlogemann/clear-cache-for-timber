function clear_cache_callback($button, ajax_action) {
	$parent = $button.parent();
	$parent.addClass('loading');

	var ajaxUrl = $button.attr('href'),
		data = {
			action: ajax_action,
		};

	jQuery.post(ajaxUrl, data, function(response) {
		$parent.removeClass('loading');
	});
}

function clear_timber_cache($button) {
	clear_cache_callback($button, 'clear_timber_cache_action');
}

function clear_twig_cache($button) {
	clear_cache_callback($button, 'clear_twig_cache_action');
}
