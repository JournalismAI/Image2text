'use strict';

const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();
const s3 = new AWS.S3();

module.exports.GetImage2textResult_001 = (event, context, callback) => {
  
  const data = JSON.parse(event.body);

  console.log(`${data.JobID} Face Search JobID status request `);

  // Search for the face based on the JSON JobID value
  
  return GetFaceSearch(data.JobID).then(jsonResult => {
    console.log(jsonResult);
	
  // Add Code here to Store/Process jsonResult (API reply or DB Insert)
  

  }).catch(error => {
    return error;
  })

};

function GetFaceSearch(jobid) {
  const params = {
 
    JobId: jobid,
	MaxResults: 10 		// You can adjust this parameter to manage the JSON Response 

   };

   // This Will return the jsonResult of the request

   return rekognition.GetFaceSearch(params).promise().then(data => {
      return data;
   }).catch(error => {
     console.log(error);
     return error;
   });  
}


