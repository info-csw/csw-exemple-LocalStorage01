// Ajouter un event listener sur le form
let form = document.getElementById('form');
form.addEventListener('submit', function(event) {
	// récupérer les valeurs des champs
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;
	// stocker les valeurs dans le local storage
	localStorage.setItem('login', login);
	localStorage.setItem('password', password);
});

/** peuple les ids correspondant aux données récupérées dans le Local Storage
*/
function getLocalStorage() {
	// récupérer les valeurs dans le local storage
	let login = localStorage.getItem('login');
	let password = localStorage.getItem('password');
	// peupler les ids dans la page
	document.getElementById('login').innerHTML = login;
	document.getElementById('password').innerHTML = password;
}
