import React from "react";

const ImageResult = ({ imageUrl, resultData }) => {
  // Assuming resultData is an object containing the OCR results

  /*const resultData = {
    name: "John",
    lastName: "Doe",
    identificationNumber: "123456789",
    dateOfIssue: "2022-01-01",
    dateOfExpiry: "2023-01-01",
    dateOfBirth: "1990-01-01",
  };
*/
  const {
    name,
    lastName,
    identificationNumber,
    dateOfIssue,
    dateOfExpiry,
    dateOfBirth,
  } = resultData;

  //const image = "k";

  return (
    <div className="flex flex-col items-start shadow-md border p-4 rounded-lg h-[22rem] w-[32rem] items-center bg-lime-200">
      <h2 className="text-xl font-bold mb-4">OCR Result</h2>
      {imageUrl && resultData && (
        <div className="border p-2 text-lg flex flex-col items-center w-[20rem]">
          <h1 className="text-green-600">success</h1>
          <div className="mb-2">
            <strong>Name:</strong> {name}
          </div>
          <div className="mb-2">
            <strong>Last Name:</strong> {lastName}
          </div>
          <div className="mb-2">
            <strong>Identification Number:</strong> {identificationNumber}
          </div>
          <div className="mb-2">
            <strong>Date of Issue:</strong> {dateOfIssue}
          </div>
          <div className="mb-2">
            <strong>Date of Expiry:</strong> {dateOfExpiry}
          </div>
          <div>
            <strong>Date of Birth:</strong> {dateOfBirth}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResult;