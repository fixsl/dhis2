const axios = require("axios");
const baseURL = "https://data-pipeline-sx4hvhyeva-uc.a.run.app/api/v1";
const key = "Zml4LWhlYWx0aC1jb25uZWN0LWludGVncmF0aW9u";

const NewRecord = (data) => {
  const payload = {
    data: data,
    key: key,
  };

  return axios
    .post(baseURL + "/push/newRecord", payload)
    .then((res) => res.data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const SampleCollected = (data) => {
  const payload = {
    data: { lab_control_no: "LT0001" },
    sPatientReferenceNo: data.sPatientReferenceNo,
    key: "Zml4LWhlYWx0aC1jb25uZWN0LWludGVncmF0aW9u",
  };

  return axios
    .post(baseURL + "/push/sampleCollectedRecord", payload)
    .then((res) => res.data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const SampleResult = (data) => {
  const payload = {
    data: { lab_control_no: "LT0001" },
    sPatientReferenceNo: data.sPatientReferenceNo,
    key: "Zml4LWhlYWx0aC1jb25uZWN0LWludGVncmF0aW9u",
  };

  return axios
    .post(baseURL + "/push/sampleResultRecord", payload)
    .then((res) => res.data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  NewRecord,
  SampleCollected,
  SampleResult
};
