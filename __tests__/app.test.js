const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const {
  validateTruthiness,
  validateStatusToBeOK,
  validateStatusNotFound,
} = require("../utils/validators");

describe("app.js unit tests", () => {
  it("should validate that app.js is not empty", () => {
    validateTruthiness(app);
  });

  it("should return status 200 for the '/' endpoint", async (done) => {
    const response = await request.get("/");

    validateStatusToBeOK(response.status);
    done();
  });

  it("should return status 200 for the '/frontend' endpoint", async (done) => {
    const response = await request.get("/frontend");

    validateStatusToBeOK(response.status);
    done();
  });

  it("should return status 200 for the '/backend' endpoint", async (done) => {
    const response = await request.get("/backend");

    validateStatusToBeOK(response.status);
    done();
  });

  it("should return status 404 for '/dummy' endpoint", async (done) => {
    const response = await request.get("/dummy");

    validateStatusNotFound(response.status);
    done();
  });
});
