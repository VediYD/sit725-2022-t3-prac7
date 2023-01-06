import express from "express";
import { expect } from "chai";
import request from "request";
import assert from "assert";

describe("Testing addition", function () {
  var url = "http://localhost:3000/add/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of adding 10, 20 is 30", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(30);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

describe("Testing subtraction", function () {
  var url = "http://localhost:3000/sub/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of subtracting 10, 20 is -10", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(-10);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

describe("Testing multiplication", function () {
  var url = "http://localhost:3000/mul/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of multiplying 10, 20 is 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(200);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

describe("Testing division", function () {
  var url = "http://localhost:3000/div/10/20";
  // checking status code directly
  it("statusCode checked 200", function (done) {
    request(url, function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // checking status code json body parsed
  it("body parsed statusCode checked 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  // check result is a number
  it("result returned is a number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });

  // check result number is correct
  it("result of dividing 10, 20 is 0.5", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(0.5);
      done();
    });
  });

  // check result number is not incorrect
  it("result is not -100", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(-100);
      done();
    });
  });
});

describe("/api/projects", function () {
  var url = "http://localhost:3000/api/projects";

  it("/api/projects:: error thrown correctly", function (done) {
    request(url, function (error, response, body) {
      assert.ifError(error);
      done();
    });
  });

  it("/api/projects:: success statusCode is 200", function (done) {
    request(url, function (error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it("/api/projects:: body parsed success statusCode is 200", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(result.statusCode, 200);
      done();
    });
  });

  it("/api/projects:: success message correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(result.message, "Success");
      done();
    });
  });

  it("/api/projects:: data has been returned", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.ok(result.data);
      done();
    });
  });

  it("/api/projects:: data returned is array", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.ok(Array.isArray(result.data));
      done();
    });
  });

  it("/api/projects:: data contents:: title is correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(result.data[0].title, "About Universes");
      done();
    });
  });

  it("/api/projects:: data contents:: image is correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(result.data[0].image, "images/SpaceWhale3.jpg");
      done();
    });
  });

  it("/api/projects:: data contents:: description is correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(
        result.data[0].desciption,
        "Everyone has choices; we all make choices, and when you choose, there are two or more options you are selecting from. The other option(s) create(s) a parallel universe as the Space Whale flew through space and time to re-ignite a new universe where you would eventually make that/those other choices."
      );
      done();
    });
  });

  it("/api/projects:: data contents:: question is correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(result.data[0].question, "How was the universe created?");
      done();
    });
  });

  it("/api/projects:: data contents:: link is correct", function (done) {
    request(url, function (error, response, body) {
      const result = JSON.parse(body);
      assert.equal(
        result.data[0].link,
        "https://www.sciencehistory.org/sites/default/files/styles/twitter_card/public/distillations_magazine/whaleinspace.jpg?itok=QlcFOC0T"
      );
      done();
    });
  });
});
