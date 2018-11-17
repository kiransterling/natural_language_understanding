var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-03-16',
  iam_apikey: 'BG_2VqgpaQMDxqG9ThZ5DLwfv5EpjPmg2KcBmHOzVTe1',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
});


var parameters = {
  'url': 'http://www.forbes.com/sites/alexkonrad/2016/01/29/new-ibm-watson-chief-david-kenny-talks-his-plans-for-ai-as-a-service-and-the-weather-company-sale',
  'features': {
    'metadata': {}
  }
};

naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
