# dev-express-uploader

This is module that provide functionality for upload file ,resize file when upload and file validation when upload file.


How to use :


1. Install from node package manager use commond  

   npm install dev-express-uploader

2. Include module using 

   var expressUploader = require("dev-express-uploader");
	 
3. Create instance 
  <pre><code>
   var  uploader = new expressUploader();
   </code></pre>
	
	
4. Set midile middleware in express 
 <pre><code>
    app.use(uploader.init);
 </code></pre>
5.Use uploadFile function for upload file 
<pre><code>
     uploader.uploadFile(req.files.nameOfYourFileFields,{
	 
	  ....Uploading file params......
	  
	 } (err ,data) => {
	     
		 .....Response of file.......
		 
	 } );
	 </code></pre>
	 
	 
6.Data contain name of file 
<pre><code>
   var uploadedFile = data.file;
    </code></pre>
	
Compleat exmaple 

<pre><code>
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
		
        width: 120, //Thumb Width
		
        height: 120, //Thumb Height
		
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

</code></pre>
	
	