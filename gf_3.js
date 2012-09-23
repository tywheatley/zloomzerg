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
//prints individual stock entries
	var pieces = entry.split(",");
	for(var y in pieces){
		alert(pieces[y]);
	}
}
