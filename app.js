var request = require('request');
var http = require('http');

var url = "http://www.vitalmx.com"




async function takeReq(req, res, error){
	console.log('Working')
	await request.get(url);
	var statusCode = await res.statusCode;
	
	console.log(statusCode);
	
	if (!error || statusCode == 200 ){
		
		 res.write('<html>');
		 res.write('<body>');
		 res.write('<h1>Website status : GOOD/ONLINE!</h1>');
		 res.write('</body>');
		 res.write('</html>');
		 res.end();
		
		
	}else{
		
		 res.write('<html>');
		 res.write('<body>');
		 res.write('<h1>Website status : error/404 not found</h1>');
		 res.write('</body>');
		 res.write('</html>');
		 res.end();
		
	}

		


}



//  function makeMagic(){
// 	http.createServer(function(req, res){
// 	console.log("running");
// 	takeReq(req, res);
	
	
		
		
		
// 	}).listen(6900);
// }




// makeMagic();

// function requestHandler(){


// request(url, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   
// });

// };

// requestHandler();