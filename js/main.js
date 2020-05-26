const toggle = document.querySelector('.switch');

function changeMode(e) {
	console.log(e.target.checked);
	if (e.target.checked) {
		// use dark mode variables
		document.body.setAttribute('data-theme', 'dark');
	} else {
		// use light mode - default variables
		document.body.setAttribute('data-theme', 'light');
	}
}

toggle.addEventListener('change', changeMode);
