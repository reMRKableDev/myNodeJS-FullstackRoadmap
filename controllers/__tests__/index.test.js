const indexController = require("../index");
const { mockRequest, mockResponse } = require("../../utils/interceptor");
const {
  validateTruthiness,
  validateToHaveBeenCalledWithOK,
  validateRenderIndexPage,
  validateRenderFrontendPage,
  validateRenderBackendPage,
  validateRender404Page,
  validateRenderMockCalls,
} = require("../../utils/validators");

describe("Controller unit tests", () => {
  let req;
  let res;

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  it("should validate that incoming controller object is not empty", () => {
    validateTruthiness(indexController);
  });

  it("should return 200 status for landing page", async () => {
    await indexController.getLandingPage(req, res);
    validateToHaveBeenCalledWithOK(res.status);
  });

  it("should call .render('index') for landing page", async () => {
    await indexController.getLandingPage(req, res);

    validateRenderMockCalls(res.render);
    validateRenderIndexPage(res.render);
  });

  it("should call .render('frontend') for landing page", async () => {
    await indexController.getFrontendPage(req, res);

    validateRenderMockCalls(res.render);
    validateRenderFrontendPage(res.render);
  });

  it("should call .render('backend') for landing page", async () => {
    await indexController.getBackendPage(req, res);

    validateRenderMockCalls(res.render);
    validateRenderBackendPage(res.render);
  });

  it("should call .render('404') for landing page", async () => {
    await indexController.getNotFoundPage(req, res);

    validateRenderMockCalls(res.render);
    validateRender404Page(res.render);
  });
});
