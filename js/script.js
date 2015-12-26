;(function() {

	'use strict';

	var i,
		$description 		= document.querySelector('.description'),
		$popoverLinks 	= document.querySelectorAll('[data-popover]'),
		$popovers			= document.querySelectorAll('.popover'),
		$codeSnippets 	= document.querySelectorAll('.code-content'),
		request 			= new XMLHttpRequest(),
		entityMapObject 	= { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;' };

	function init() {
		for (i = 0; i < $popoverLinks.length; i++) $popoverLinks[i].addEventListener('click', openPopover);
		document.addEventListener('click', closePopover);
		buildSnippets();
		getVersion();
		googleAnalytics();
	}

	function closePopover(e) {
		for (i = 0; i < $popovers.length; i++) $popovers[i].classList.remove('popover-open');
	}

	function openPopover(e) {
		e.preventDefault();
		if (document.querySelector(this.getAttribute('href')).classList.contains('popover-open')) {
			document.querySelector(this.getAttribute('href')).classList.remove('popover-open');
		}
		else {
			closePopover();
			document.querySelector(this.getAttribute('href')).classList.add('popover-open');
		}
		e.stopImmediatePropagation();
	}

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, function(s) {
			return entityMapObject[s];
		});
	}

	function buildSnippets() {
		for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML);
	}

	function getVersion() {
		if ($description) {
			request.open('GET', '//raw.githubusercontent.com/milligram/milligram/master/package.json', true);
			request.onload = function() {
				if (this.status >= 200 && this.status < 400) $description.innerHTML = $description.innerHTML+' <br><i><small>Currently v'+JSON.parse( this.response ).version+'</small></i>';
				else console.log( '// There was a connection error of some sort' );
			};
			request.send();
		}
	}

	function googleAnalytics() {
		if ( window.location.hostname !== 'localhost' ) {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-24389952-15', 'auto');
			ga('send', 'pageview');
		}
	}

	init();

}());
