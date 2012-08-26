//var portfolio_input = $().load('portfolio.txt');
//alert("js");
//alert(typeof portfolio_input);
//alert(portfolio_input);
//console.log(portfolio_input);

$.get('portfolio.txt', function(data) {
	split_data = data.split("\n");
	printPortfolio(split_data);

}, 'text');

function printPortfolio(portfolio){
//calls printEntry on each entry
	for(var x in portfolio){
		printEntry(portfolio[x]);
	}
}

function printEntry(entry){
//alert("Print Entry called");
//prints individual stock entries
	var pieces = entry.split(",");
	$('#content_window').append($('<div class="stock"><span class="name">' +pieces[0]+' </span><span class="symbol">' + pieces[1] + '</span></div>')).addClass('stock');
	//alert(pieces[0]);
	//for(var y in pieces){
		//alert(pieces[y]);

}

