const express = require("express");
const { validationResult } = require("express-validator");
const cors = require("cors");
const { NewRecordVal, SampleVal } = require("./validate");
const { NewRecord, SampleCollected, SampleResult } = require("./action");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/new-record", NewRecordVal, async (req, res) => {
  const errorMessage = await validationResult(req);

  try {
    if (errorMessage.errors.length > 0)
      throw errorMessage.errors.map((err) => err.msg);

    const payload = await NewRecord(req.body);
    res.send(payload.message);
  } catch (error) {
    if (error.response && error.response.data) {
      res.status(500).send(error.response.data);
    } else res.status(500).send(error);
  }
});

app.post("/sample-collected", SampleVal, async (req, res) => {
  const errorMessage = await validationResult(req);

  try {
    if (errorMessage.errors.length > 0)
      throw errorMessage.errors.map((err) => err.msg);

    const payload = await SampleCollected(req.body);
    res.send(payload.message);
  } catch (error) {
    if (error.response && error.response.data) {
      res.status(500).send(error.response.data);
    } else res.status(500).send(error);
  }
});

app.post("/sample-result", SampleVal, async (req, res) => {
  const errorMessage = await validationResult(req);

  try {
    if (errorMessage.errors.length > 0)
      throw errorMessage.errors.map((err) => err.msg);

    const payload = await SampleResult(req.body);
    
    res.send(payload.message);
  } catch (error) {
    if (error.response && error.response.data) {
      res.status(500).send(error.response.data);
    } else res.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
