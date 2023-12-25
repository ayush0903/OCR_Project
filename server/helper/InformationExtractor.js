
// const data = {
//     amazon: {
//       status: "success",
//       extracted_data: [
//         {
//           last_name: { value: "WORASIRI", confidence: 0.98 },
//           given_names: [],
//           birth_place: { value: null, confidence: null },
//           birth_date: { value: "1991-09-21", confidence: 0.69 },
//           issuance_date: { value: null, confidence: 0.08 },
//           expire_date: { value: null, confidence: 0.33 },
//           document_id: { value: null, confidence: 0.41 },
//           issuing_state: { value: null, confidence: null },
//           address: { value: null, confidence: 0.59 },
//           age: { value: null, confidence: null },
//           country: { name: null, alpha2: null, alpha3: null, confidence: null },
//           document_type: { value: "DRIVER LICENSE FRONT", confidence: 0.96 },
//           gender: { value: null, confidence: null },
//           image_id: [],
//           image_signature: [],
//           mrz: { value: null, confidence: 0.98 },
//           nationality: { value: null, confidence: null },
//         },
//       ],
//       cost: 0.025,
//     },
//     affinda: {
//       status: "success",
//       extracted_data: [
//         {
//           last_name: { value: "MISS", confidence: 0.492 },
//           given_names: [{ value: "Worasiri", confidence: 0.935 }],
//           birth_place: { value: "Sum Lable", confidence: 0.067 },
//           birth_date: { value: "1991-09-21", confidence: 0.961 },
//           issuance_date: { value: null, confidence: null },
//           expire_date: { value: "2030-09-20", confidence: 0.961 },
//           document_id: { value: null, confidence: null },
//           issuing_state: { value: null, confidence: null },
//           address: { value: null, confidence: null },
//           age: { value: null, confidence: null },
//           country: null,
//           document_type: { value: null, confidence: null },
//           gender: { value: null, confidence: null },
//           image_id: [],
//           image_signature: [],
//           mrz: { value: null, confidence: null },
//           nationality: { value: null, confidence: null },
//         },
//       ],
//       cost: 0.07,
//     },
//     microsoft: {
//       status: "success",
//       extracted_data: [
//         {
//           last_name: { value: "WORASIRI", confidence: null },
//           given_names: [
//             { value: "Miss", confidence: null },
//             { value: "Palalee", confidence: null },
//           ],
//           birth_place: { value: null, confidence: null },
//           birth_date: { value: null, confidence: null },
//           issuance_date: { value: null, confidence: null },
//           expire_date: { value: null, confidence: null },
//           document_id: { value: null, confidence: null },
//           issuing_state: { value: null, confidence: null },
//           address: { value: null, confidence: null },
//           age: { value: null, confidence: null },
//           country: { name: null, alpha2: null, alpha3: null, confidence: null },
//           document_type: { value: null, confidence: 0.995 },
//           gender: { value: null, confidence: null },
//           image_id: [],
//           image_signature: [],
//           mrz: { value: null, confidence: null },
//           nationality: { value: null, confidence: null },
//         },
//       ],
//       cost: 0.01,
//     },
//     "eden-ai": {
//       status: "success",
//       extracted_data: [
//         {
//           last_name: { value: "WORASIRI", confidence: 0.98 },
//           given_names: [{ value: "Worasiri", confidence: 0.935 }],
//           birth_place: { value: "Sum Lable", confidence: 0.067 },
//           birth_date: { value: "1991-09-21", confidence: 0.961 },
//           issuance_date: { value: null, confidence: 0.08 },
//           expire_date: { value: "2030-09-20", confidence: 0.961 },
//           document_id: { value: null, confidence: 0.41 },
//           issuing_state: { value: null, confidence: null },
//           address: { value: null, confidence: 0.59 },
//           age: { value: null, confidence: null },
//           country: { name: null, alpha2: null, alpha3: null, confidence: null },
//           document_type: { value: null, confidence: 0.995 },
//           gender: { value: null, confidence: null },
//           image_id: [{ value: null, confidence: null }],
//           image_signature: [{ value: null, confidence: null }],
//           mrz: { value: null, confidence: 0.98 },
//           nationality: { value: null, confidence: null },
//         },
//       ],
//     },
//   };

const InfomationExtract = (data) => {

  const extractedData = {
      name: null,
      lastName: null,
      identificationNumber: null,
      dateOfBirth: null,
      dateOfIssue: null,
      dateOfExpiry: null
    };
    
    // Extract information from Microsoft part
    const microsoftData = data.microsoft.extracted_data[0];
    if (microsoftData) {
      extractedData.name = microsoftData.given_names.map((name) => name.value).join(' ');
      extractedData.lastName = microsoftData.last_name.value;
    }
    
    // Extract information from Eden AI part
    const edenAiData = data['eden-ai'].extracted_data[0];
    if (edenAiData) {
      extractedData.identificationNumber = edenAiData.document_id.value;
      extractedData.dateOfBirth = edenAiData.birth_date.value;
      extractedData.dateOfIssue = edenAiData.issuance_date.value;
      extractedData.dateOfExpiry = edenAiData.expire_date.value;
    }
    return extractedData;

}
    module.exports = InfomationExtract;


