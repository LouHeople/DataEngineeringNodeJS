
describe("/ route ", () => {
    it("should be up and running", function () {
        return frisby.get(`http://localhost:3000/`).expect(`status`, 200)
    })
})

