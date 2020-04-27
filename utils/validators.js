module.exports = {
  validateTruthiness: (object) =>
    expect(object).not.toBeNull() && expect(object).toBeTruthy(),

  validateStatusToBeOK: (status) =>
    expect(status).not.toBe(404) && expect(status).toBe(200),

  validateStatusNotFound: (status) =>
    expect(status).not.toBe(200) && expect(status).toBe(404),

  validateToHaveBeenCalledWithOK: (status) =>
    expect(status).not.toHaveBeenCalledWith(404) &&
    expect(status).toHaveBeenCalledWith(200),

  validateRenderMockCalls: (render) => {
    expect(render.mock.calls.length).not.toBe(0) &&
      expect(render.mock.calls.length).toBe(1);
  },

  validateRenderIndexPage: (render) =>
    expect(render).not.toHaveBeenCalledWith("404") &&
    expect(render).toHaveBeenCalledWith("index"),

  validateRenderFrontendPage: (render) =>
    expect(render).not.toHaveBeenCalledWith("404") &&
    expect(render).toHaveBeenCalledWith("frontend"),

  validateRenderBackendPage: (render) =>
    expect(render).not.toHaveBeenCalledWith("404") &&
    expect(render).toHaveBeenCalledWith("backend"),

  validateRender404Page: (render) =>
    expect(render).not.toHaveBeenCalledWith("frontend") &&
    expect(render).toHaveBeenCalledWith("404"),
};
