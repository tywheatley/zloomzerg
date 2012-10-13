function print_stocks(input){
	//alert("cheese");

	//alert("print stocks");
	//alert(input);
	alert(input.toString());
	//$.get('portfolio.txt', function(data) {
	var lc_filename = input.toLowerCase()+".txt";
	alert(lc_filename);
	//alert(typeof(lc_filename))
	$.get(lc_filename, function(data){
	split_data = data.split("\n");
	$('#accordion3').html("");
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
	/*
	$('#JPM').append($(
		alert("appending chart")
		g3 = new Dygraph(
    		document.getElementById("graphdiv3"),
    		"prices_jpm.csv",
    		{
		      rollPeriod: 7,
		      showRoller: true
    		}
  		);
	);)*/

	g = new Dygraph(

    // containing div
    document.getElementById("JPM"),

    // CSV or path to a CSV file.
    "Date,Temperature\n" +
    "2008-05-07,75\n" +
    "2008-05-08,70\n" +
    "2008-05-09,80\n"

  );

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
	$('#accordion3').append($('<div class="accordion-group"> \
							   		<div class="accordion-heading"> \
							   			<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#'+pieces[1]+'">'+pieces[0]+'</a></div> \
							   			<div id="'+pieces[1]+'" class="accordion-body collapse"> \
							   			<div class="accordion-inner">' + pieces +'</div><div class="chart"></div> '));

}
