function print_stocks(input){
	//alert("print stocks");
	//alert(input);
	//alert(input.toString());
	$.get('portfolio.txt', function(data) {
	split_data = data.split("\n");
	printPortfolio(split_data);

	}, 'text');
}

function printPortfolio(portfolio){
//alert("print portfolio");
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
