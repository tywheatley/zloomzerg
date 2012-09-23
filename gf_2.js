//alert("Javascript Deux");

$(document).ready(function() {
    //alert("document is ready");
    $.ajax({
        type: "GET",
        url: "portfolio.txt",
        dataType: "text",
        //success: function(data) {printPortfolio(data);}
        success: function(data) {processData(data);}

     });
});



function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    printPortfolio(allTextLines);

    for (var i=1; i<allTextLines.length; i++) {
        var row_data = allTextLines[i];
        var new_row = "<p>"+row_data+"</p>";
        //document.getElementById("content_window").innerHTML += new_row;
        //original list

        var data = allTextLines[i].split(',');
       // if (data.length == headers.length) {
            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
                 //"<span style='color:#ffffff'>" + oldHTML + "</span>";
                 //row_data = j +". " + data[j]; +"<br>"
              // document.getElementById("content_window").innerHTML += new_row;
                if(j % headers.length == 0){
              // document.getElementById("content_window").innerHTML += new_row;
                }

              //  alert("data is "+data[j]);
            }
            lines.push(tarr);
           // document.getElementById("right_pane").innherHTML = lines;
      //  }
    }
}


function printPortfolio(portfolio){
  //alert("Print the portfolio!");
 // var allTextLines = portfolio.split(/\r\n|\n/);

  for (var x in portfolio){
   // alert(portfolio[x]);
    printStock(portfolio[x]);
  }
}

function printStock(stock){
  // alert("Printing the stock");
  var stock_components = stock.split(',');
  var rate_change = "";
  if(stock_components[3]>=0){
    //change is positive
    rate_change = "+ " + stock_components[3];
  }else{
    //change is negative
    rate_change = "" + stock_components[3];
  }
 // alert(stock_components);
  var new_entry = "<div class=portfolio_entry><div class=s1> <p class=ticker_symbol>"+ stock_components[1] +"</p><p class=stock_name >"+stock_components[0]+"</p></div>"
                    + "<div class=s2>"+ stock_components[2] + "[ " + rate_change + " ]" +"</div>";


  document.getElementById("content_window").innerHTML += new_entry + "</div>";

}

printPortfolio();