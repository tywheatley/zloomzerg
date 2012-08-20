console.log("Javascript Runs");
alert("js");  

google.load("gdata", "1.x");

google.setOnLoadCallback(getMyFinancePortfolioFeed);


getMyFinancePortfolioFeed(){
	

};

function testInput(username,pw){
	console.log(username + " " + password);
	console.log("life");
}

function logMeIn() {
  alert("Logging In...");
  scope = "http://finance.google.com/finance/feeds/";
  var token = google.accounts.user.login(scope);
}

function setupMyService() {
  var myService =
    new google.gdata.finance.FinanceService('exampleCo-exampleApp-1');
  logMeIn();
  return myService;
}

// Google Finance Portfolio Data API Example: Retrieve Portfolio

var financeService =
  new google.gdata.finance.FinanceService('GoogleInc-financejsguide-1.0');

var portfolioID = 1;
var portfolioEntryUri = 
  'https://finance.google.com/finance/feeds/default/portfolios/' + portfolioID;

// This callback will run when the portfolio query is complete
var portfolioEntryCallback = function(result) {
  PRINT('Portfolio with ID ' + portfolioID + ' has title "' +
        result.entry.getTitle().getText() + '" and currency code "' +
        result.entry.getPortfolioData().getCurrencyCode() + '"');
};

// FinanceService methods may be supplied with an alternate callback for errors
var handleErrorCallback = function(error) {
  PRINT(error);
};

PRINT('Retrieving a specific user portfolio entry...');
financeService.getPortfolioEntry(portfolioEntryUri,
                                 portfolioEntryCallback,
                                 handleErrorCallback);

testInput();
logMeIn();
setupMyService();
