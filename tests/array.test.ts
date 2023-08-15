describe("Array", function() {
    it("should same with javascript", function() {
        
        const names: string[] = ["Moli", "Mili", "Odo", "Ijo"];
        const values: number[] = [5, 1, 1, 1];

        console.info(names);
        console.info(values);

    });

    it("should support with readonly array", function() {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
        console.info(hobbies);

        // hobbies[0] = "bermain";

    });
    
    it("should support tuple", function() {
        
        const person: readonly[string, string, number] = ["Acen", "Cuansen", 22];
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Budi";

    });
});