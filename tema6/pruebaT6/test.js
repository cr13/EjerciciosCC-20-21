var request = require("supertest");
app = require("./app.js");


describe("Coches", () => {
    describe("GET", () => {
        it("Deberia devolver una lista con todos los coches", (done) => {
            request(app)
                .get("/cars")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });
});

describe("Un solo coche", () => {
    describe("GET", () => {
        it("Deberia devolver un solo coche", (done) => {
            request(app)
                .get("/cars/0")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });
});

describe("Un nuevo Coche", () => {
    describe("POST", () => {
        it("Deberia crear un nuevo coche", (done) => {
            request(app)
                .post("/cars/9/BENTLEY/['Continental GT', 'Mulsanne', 'Flying Spur', 'Continental GTC', 'Bentayga']")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });
});