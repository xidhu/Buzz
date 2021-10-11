// Check if storage is supported or not
if (typeof(Storage) !== "undefined") {
	var str = '<div><a class="waves-effect waves-light btn modal-trigger">Modal</a>  <div id="modal1" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>A bunch of text</p></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a></div></div></div>';
    var newdiv = document.createElement('div');
    newdiv.innerHTML = str;
    document.getElementById('test1').appendChild(newdiv);
} else {
	var str = '<div><a class="waves-effect waves-light btn modal-trigger">Modal</a>  <div id="modal1" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>A bunch of text</p></div><div class="modal-footer"><a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a></div></div></div>';
    var newdiv = document.createElement('div');
    newdiv.innerHTML = str;
    document.getElementById('test1').appendChild(newdiv);
}

function submitIncome() {
	Materialize.toast('Added Income', 1000, 'rounded');
	alert(income_input.value);
	
}

function addIncome(){
	alert();
}
