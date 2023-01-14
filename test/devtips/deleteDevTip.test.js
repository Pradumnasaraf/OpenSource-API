const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");
require("dotenv").config();
const testId = process.env.TEST_DEV_TIP_ID;

// Assertion Style
chai.should();
chai.use(chaiHttp);
/** Test the GET /api/devtip:ID route */

/* eslint-disable-next-line */
describe("----- DELETE /api/devtip/:id -----", () => {
  it("It should DELETE a devtip by ID", (done) => {
    chai
      .request(server)
      .delete("/api/devtip/" + testId)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have
          .property("summary")
          .eq("data has been deleted");
      });
    done();
  });

  it("It should NOT DELETE a devtip by ID", (done) => {
    const randomID = "1010";
    chai
      .request(server)
      .delete("/api/devtip/" + randomID)
      .end((err, response) => {
        response.should.have.status(400);
        response.body.should.have
          .property("summary")
          .eq(
            "unable to delete the dev tip, either the id is invalid or the Dev Tip is not found"
          );
      });
    done();
  });
});
