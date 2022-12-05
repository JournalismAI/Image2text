'use strict';

const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();
const s3 = new AWS.S3();

// This is assumed that facese Collection "Image2TextCollection" was created prior via aws-cli 

module.exports.TrainImage2text_001 = async (event) => {
  
  const s3Record = event.Records[0].s3;
  const bucket = s3Record.bucket.name;
  const key = s3Record.object.key;

  console.log(`${key} was uploaded in the bucket bucket ${bucket}`);

  // Detect the Face and log the jsonResult
  return index-faces(bucket, key, "<YourCustomIDPerImageHere>" ).then(jsonResult => {
    console.log(jsonResult);
	
	
  // Add Code here to Store/Process jsonResult (API reply or DB Insert)	

  }).catch(error => {
    return error;
  })

};



function index-faces(bucket, key, extID) {
  const params = {
    Image: {
     S3Object: {
      Bucket: bucket, 
      Name: key
     }
    }, 
    CollectionId: "Image2TextCollection",
	MaxFaces: 1,
	QualityFilter: "AUTO",
	ExternalImageId: extID

   };

	
   // Result is a JSON File of the index face result

   return rekognition.index-faces(params).promise().then(data => {
      return data;
   }).catch(error => {
     console.log(error);
     return error;
   });  
}


