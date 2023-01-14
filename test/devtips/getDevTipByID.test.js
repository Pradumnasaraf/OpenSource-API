const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");
require("dotenv").config();
const testId = process.env.TEST_DEV_TIP_ID;

// Assertion Style
chai.should();
chai.use(chaiHttp);

/** Test the GET /api/devtip:ID route */

describe("----- GET /api/devtip/:id -------", () => {
  it("It should GET a devtip by ID", (done) => {
    chai
      .request(server)
      .get("/api/devtip/" + testId)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("summary");
        response.body.data.should.have.property("devtip");
      });
    done();
  });
  it("It should NOT GET a devtip by ID", (done) => {
    const randomID = "5656";
    chai
      .request(server)
      .get("/api/devtip/" + randomID)
      .end((err, response) => {
        response.should.have.status(400);
        response.body.should.have
          .property("summary")
          .eq("either the id is invalid or the dev tip is not found");
      });
    done();
  });
});
