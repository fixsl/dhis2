const { checkSchema } = require("express-validator");

const NewRecordVal = checkSchema({
  iClinicId: {
    notEmpty: true,
    errorMessage: "iClinicId is required",
  },
  sFirstName: {
    notEmpty: true,
    errorMessage: "sFirstName is required",
  },
  sMiddleName: {
    notEmpty: true,
    errorMessage: "sMiddleName is required",
  },
  sLastName: {
    notEmpty: true,
    errorMessage: "sLastName is required",
  },
  sGender: {
    notEmpty: true,
    errorMessage: "sGender is required",
  },
  dDOB: {
    notEmpty: true,
    errorMessage: "dDOB is required",
  },
  aMobileNo: {
    notEmpty: true,
    errorMessage: "aMobileNo is required",
  },
  sAddress: {
    notEmpty: true,
    errorMessage: "sAddress is required",
  },
  sEmail: {
    notEmpty: true,
    errorMessage: "sEmail is required",
  },
  sCountry: {
    notEmpty: true,
    errorMessage: "sCountry is required",
  },
  sPatientReferenceNo: {
    notEmpty: true,
    errorMessage: "sPatientReferenceNo is required",
  },
  sFlightName: {
    notEmpty: true,
    errorMessage: "sFlightName is required",
  },
  sFlightNumber: {
    notEmpty: true,
    errorMessage: "sFlightNumber is required",
  }
});

const SampleVal = checkSchema({
  sPatientReferenceNo: {
    notEmpty: true,
    errorMessage: "sPatientReferenceNo is required",
  }
});

module.exports = {
  NewRecordVal,
  SampleVal
};
