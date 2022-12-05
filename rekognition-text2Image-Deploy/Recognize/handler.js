'use strict';

const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();
const s3 = new AWS.S3();

module.exports.StartImage2text_001 = async (event) => {
  
  const s3Record = event.Records[0].s3;
  const bucket = s3Record.bucket.name;
  const key = s3Record.object.key;

  console.log(`${key} was uploaded in the bucket bucket ${bucket}`);

  // Detect the Face and log the jobID
  return StartFaceSearch(bucket, key).then(jobId => {
    console.log(jobId);
	
  // Add Code here to Store/Process jobId (API reply or DB Insert)
  

  }).catch(error => {
    return error;
  })

};

function StartFaceSearch(bucket, key) {
  const params = {
    Video: {
     S3Object: {
      Bucket: bucket, 
      Name: key
     }
    }, 
    CollectionId: "Image2TextCollection" 

   };

   // This Will return the JobID of the request

   return rekognition.StartFaceSearch(params).promise().then(data => {
      return data;
   }).catch(error => {
     console.log(error);
     return error;
   });  
}


