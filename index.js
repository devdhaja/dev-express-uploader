

module.exports = class {
    uploadFile(file, other, callback) {
        if (typeof file === 'undefined') {
            callback({error: "No file uploaded"});
        } else {
            //This section for check validation 
            if (other.validate) {
                var ext = this.path.extname(file.name).split('.');
                if (other.type.includes(ext[1])) {
                    var fileName = +new Date() + "." + ext[1];
                    file.mv(other.destination + fileName, (err) => {
                        if (err) {
                            callback({error: err});
                        } else {
                            if (other.thumb) {
                                this.Jimp.read(other.destination + fileName, function (err, lenna) {
                                    if (err)
                                        throw err;
                                    lenna.resize(other.width ? other.width : 120, other.height ? other.height : 120)            // resize 
                                            .quality(other.quality ? other.quality : 60)                 // set JPEG quality                 // set greyscale 
                                            .write(other.thumbDestination + fileName); // save 
                                });
                            }

                            callback(false, {file: fileName, thumb: fileName});
                        }
                    });
                } else {
                    callback({error: "uploading file have not valid extension."});
                }
            } else {
                var ext = this.path.extname(file.name).split('.');
                var fileName = +new Date() + "." + ext[1];
                file.mv(other.destination + fileName, (err) => {
                    if (err) {
                        callback({error: err});
                    } else {
                        if (other.thumb) {
                            this.Jimp.read(other.destination + fileName, function (err, lenna) {
                                if (err)
                                    throw err;
                                lenna.resize(other.width ? other.width : 120, other.height ? other.height : 120)            // resize 
                                        .quality(other.quality ? other.quality : 60)  // set JPEG quality                 // set greyscale 
                                        .write(other.thumbDestination + fileName); // save 
                            });
                        }

                        callback(false, {file: fileName, thumb: fileName});
                    }
                });
            }
        }
    }
    constructor() {
        let file = require('express-fileupload');
        this.path = require('path');
        this.thumb = require('express-upload-resizer');
        this.Jimp = require("jimp");
        this.init = file();
    }

};




