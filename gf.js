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
	//$('#content_window').append($('<div class="container-fluid"><'))
	for(var x in portfolio){
		printEntry(portfolio[x]);
	}
}

function printEntry(entry){
	//alert(entry);
//alert("Print Entry called");
//prints individual stock entries
	var pieces = entry.split(",");
	//$('#content_window').append($('<div class="stock container" data-toggle="collapse" href="details"><span class="name collapse accordion-header"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#details">' +pieces[0]+' </a></span><span class="symbol">' + pieces[1] + '</span><div class="collapse" id="collapse" style="height: 0px;>'+'details'+'</div></div>')).addClass('stock');
/*
	$('#content_window').append($('<div class="accordion-group"><div class="accordion-heading"> \
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="'+pieces[1]+'">'+ pieces[0] +'\
									</a></div><div id="'+pieces[1]+'" class="accordion-body collapse" style="height: 0px; "><div class="accordion-inner">Details</div>\
									</div></div>'))
*/
	//alert(pieces[0]);
	//for(var y in pieces){
		//alert(pieces[y]);
	$('#accordion3').append($('<div class="accordion-group" id="group2">\
							   		<div class="accordion-heading">\
							   			<a class="accordion-toggle" data-toggle="collapse" data-parent="#group2" href="#'+pieces[1]+'">'+pieces[0]+'</a></div>\
							   			<div id="#'+pieces[1]+'" class="accordion-body collapse">\
							   			<div class="accordion-inner">Lorem ipsum div </dolor></div></div> '));
}
