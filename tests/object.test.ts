describe("Object", function() {
    it("should support in typescript", function() {

        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Acen",
        };

        console.info(person);

        person.id = "2";
        person.name = "Cuansen";

        console.info(person);

    });
});