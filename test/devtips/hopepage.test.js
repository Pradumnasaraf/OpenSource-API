const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index.js");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("----- GET / HOMEPAGE -----", () => {
  it("It should GET the HTML home page", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
      });
    done();
  });
});
