let server = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp);

describe('Test Web Server', () => {
    describe("Test Hello World", () => {
        it("It should return status OK", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eq("Hello World, my name is Aleš.");
                done();
                });
        });

        it("It should return ERROR", (done) => {
            chai.request(server)
                .get("/404")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });
});
