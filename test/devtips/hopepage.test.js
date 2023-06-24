import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index.js";

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
