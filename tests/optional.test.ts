describe("Optional Parameter", function() {
    it("should support typescript", function() {

        function sayHallo(name?: string | null) {
            if(name){
                console.info(`Hallo ${name}`);
            }else{
                console.info("Hallo");
            };
        };

        sayHallo("Acen");

        const name: string | undefined = undefined;

        sayHallo(name);
        sayHallo(null);

    });
});