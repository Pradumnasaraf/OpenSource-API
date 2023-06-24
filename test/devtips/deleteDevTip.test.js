import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index.js";
import dotenv from "dotenv";
dotenv.config();
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
        response.should.have.status(501);
        response.body.should.have
          .property("summary")
          .eq(
            "unable to delete the dev tip, either the id is invalid or the Dev Tip is not found"
          );
      });
    done();
  });
});
