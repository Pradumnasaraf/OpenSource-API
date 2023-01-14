const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("----- POST /api/devtip -----", () => {
  it("It should POST a new dev tip", (done) => {
    const devtip = {
      message: "Test Dev Tip Message",
    };
    chai
      .request(server)
      .post("/api/devtip")
      .send(devtip)
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a("object");
        response.body.should.have
          .property("summary")
          .eq("your dev tip has been saved");
        response.body.data.should.have.property("devtip");
      });
    done();
  });
  it("It should NOT POST a new dev tip without the message property", (done) => {
    const devtip = {
      message: "",
    };
    chai
      .request(server)
      .post("/api/devtip")
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
