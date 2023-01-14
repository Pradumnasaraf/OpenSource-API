const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("----- UPDATE /api/devtip/:id -----", () => {
  it("It should UPDATE a devtip by ID", (done) => {
    const testID = "63c13c24be5bda6b556d9a54";
    const devtip = {
      message: "Test Dev Tip Message",
    };
    chai
      .request(server)
      .patch("/api/devtip/" + testID)
      .send(devtip)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have
          .property("summary")
          .eq("your data has been updated!");
      });
    done();
  });

  it("It should NOT UPDATE a devtip if ID is wrong", (done) => {
    const testID = "1010";
    const devtip = {
      message: "Test Dev Tip Message",
    };
    chai
      .request(server)
      .patch("/api/devtip/" + testID)
      .send(devtip)
      .end((err, response) => {
        response.should.have.status(400);
        response.body.should.be.a("object");
        response.body.should.have
          .property("summary")
          .eq(
            "unable to update the dev tip, either the id is invalid or the dev tip is not found"
          );
      });
    done();
  });

  it("It should NOT UPDATE a devtip if message is empty", (done) => {
    const testID = "63c13c24be5bda6b556d9a54";
    const devtip = {
      message: "",
    };
    chai
      .request(server)
      .patch("/api/devtip/" + testID)
      .send(devtip)
      .end((err, response) => {
        response.should.have.status(400);
        response.body.should.be.a("object");
        response.body.should.have
          .property("summary")
          .eq("please provide a dev tip, message is empty.");
      });
    done();
  });
});
