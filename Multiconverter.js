// conversion Dollars to Euros( 1USD = 0.892901) as of 11.08.2019; conversion Swiss Franc to Euro ( 1chf = 0.918063) as of 11-08-2019, conversion Knots to Kph (1knots = 1.85Kph);

//Dollars to Euros

function DollarstoEuros ( Dollars) { 
    return Dollars * 0.892901;
}

// Swiss Francs to Euros

function SwissFrancsToEuros ( Francs ) {
    return Francs * 0.918063;
}

// Knots to Kph

function KnotstoKph ( Knots ) {
    return Knots * 1.85;
}

// Ask the user which conversion they want to use
var currentCurrency = '';

function WhichConversion () {
    var answer = window.prompt( " Welcome to the Multiconverter! What do you want to convert?  ( Dollars, Francs, Knots)");
   
    currentCurrency = answer;

    return answer !== null
}

//Ask for a Value
function AskForValue () {
    var answer = window.prompt( " Enter a Value to Convert")
    return answer;
}
// Continue as long the user wants
//Ask the user which conversion they want to use

while (WhichConversion()) {
    var ConversionValue = AskForValue();
    var result = 0;
	var resultMessage = " The result is ";
   

    if (currentCurrency == "Dollars"){
        resultMessage += DollarstoEuros(Number(ConversionValue))
        .toString();
    }else if (currentCurrency == "Francs"){
        resultMessage += SwissFrancsToEuros(Number(ConversionValue))
        .toString();
    }else if (currentCurrency == "Knots"){
        resultMessage += KnotstoKph(Number(ConversionValue))
        .toString();
    }else{
        resultMessage = " Pay attention! That conversion is not supported.";
    }



//Display the result

console.log(resultMessage);
}
