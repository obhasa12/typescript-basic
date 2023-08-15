describe("Any", function() {
    it("should support in typescript", function() {

        const person: any ={
            id: 1,
            name: "Acen",
            age: 22
        };

        person.age = 23;
        person.address = "Bekasi";

        console.info(person);
    });
});