function printPortfolio(input_file){
alert("print portfolio");

	$.get(input_file, function(data) {
	split_data = data.split("\n");
	//printPortfolio(split_data);

}, 'text');
//calls printEntry on each entry
	//var contents = split_data;
	for(var x in split_data){
		printEntry(split_data);
	}
}

function printEntry(entry){
//prints individual stock entries
alert("print entry");
	var pieces = entry.split(",");
	for(var y in pieces){
		alert(pieces[y]);
	}
}

printPortfolio('portfolio.txt');