const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");

// Assertion Style
chai.should();
chai.use(chaiHttp);

/** Test the GET /api/devtip route */

describe("----- GET /api/devtip -----", () => {
  it("It should GET all the devtips", (done) => {
    chai
      .request(server)
      .get("/api/devtip")
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("data");
        response.body.should.have.property("results");
        response.body.data.should.have.property("devtip");
      });
    done();
  });
  it("It should NOT GET all the devtips", (done) => {
    chai
      .request(server)
      .get("/api/devtips")
      .end((err, response) => {
        response.should.have.status(404);
      });
    done();
  });
});
