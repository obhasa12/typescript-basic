describe("Function", function() {
    it("should support in typescript", function() {

        function sayHallo(name: string): string{
            return `Hallo ${name}`;
        };

        expect(sayHallo("Acen")).toBe("Hallo Acen");

        function printHallo(name: string): void{
            console.info(`Hallo ${name}`);
        };

        printHallo("Acen");

    });

    it("should support default value", function() {
        function sayHallo(name: string = "Guest"): string{
            return `Hallo ${name}`;
        };

        expect(sayHallo()).toBe("Hallo Guest");
        expect(sayHallo("Acen")).toBe("Hallo Acen");

    });

    it("should support rest parameter", function() {
        function sum(...values: number[]): number{
            let total = 0;
            for(const value of values){
                total += value;
            };

            return total;
        };

        expect(sum(1,2,3,4,5)).toBe(15);
    });

    it("should support optional parameter", function() {
        function sayHallo(firstName: string, lastName?: string): string{
            if(lastName) return `Hallo ${firstName} ${lastName}`;
            
            return `Hallo ${firstName}`;
        };

        expect(sayHallo("Acen")).toBe("Hallo Acen");
        expect(sayHallo("Acen", "Cuansen")).toBe("Hallo Acen Cuansen");
    });

    it("should support function overloading", function() {

        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value * 10;
            };
        };

        expect(callMe(10)).toBe(100);
        expect(callMe("Acen")).toBe("ACEN");
    });

    it("should support function as parameter", function() {

        function sayHallo(name: string, filter: (name: string) => string){
            return `Hallo ${filter(name)}`;
        };

        function toUpper(name: string): string {
            return name.toUpperCase();
        };

        expect(sayHallo("Acen", toUpper)).toBe("Hallo ACEN");
        expect(sayHallo("Odo", function(name: string): string {
            return name.toUpperCase();
        })).toBe("Hallo ODO");
        expect(sayHallo("Odo", (name: string): string => name.toUpperCase())).toBe("Hallo ODO");


    });
});