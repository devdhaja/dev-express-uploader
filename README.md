# dev-express-uploader
This is module that provide functionality for upload file ,resize file when upload and file validation when upload file.


How to use :


1. Install from node package manager use commond  npm install dev-express-uploader

2. Include module using 
   var expressUploader = require("dev-express-uploader");
	 
3. Create instance 
   var  uploader = new expressUploader();
	
	
4. Set midile middleware in express 

    app.use(uploader.init);
	
5.Use uploadFile function for upload file 

     uploader.uploadFile(req.files.nameOfYourFileFields,{
	 
	  ....Uploading file params......
	  
	 } (err ,data) => {
	     
		 .....Response of file.......
		 
	 } );
	 
	 
6.Data contain name of file 
   var uploadedFile = data.file;
	
Compleat exmaple 



var express = require("express");

var expressUploader = require("dev-express-uploader");

var bodyParser = require("body-parser");

var app = new express();

var uploader = new expressUploader();

app.use(uploader.init);

app.use(bodyParser.json());

var port = 9000 | process.env.port;

app.use(express.static("public"));

app.listen(9000, (err, res) => {

    if (err)
	
        console.log("error is ---->" + err);
		
    else
	
        console.log("i am running on port on--->" + port);
});

app.post("/saveFile", function (req, res) {

    uploader.uploadFile(req.files.file, {
	
        validate: true,
		
        type: ['jpg', 'png', 'gif'], // validate = true then mandatory otherwise optional 
		
        thumb: true,  // if want to create thumb of image then true otherwise false 
		
        width: 120,
		
        height: 120,
		
        quality: 80,   // Afetr resize file then set quality of file 
		
        destination: "public/upload/",   // Detination dir where you want to save file
		
        thumbDestination: "public/upload/thumb/"  // If want to create thumb then set thumb destination path

    }, (err, data) => {
	
        if (err) {
		
            res.json(err)   // If error in uploading file then go in this section 
			
        } else {
		
            res.send(data.file); // If File uploaded then responce file name.
        }
		
    });
	
});
	
	