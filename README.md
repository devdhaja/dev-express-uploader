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
	
	