import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/interface";
import { Person } from "../src/person";

describe("Interface", function() {
    it("should support in typescript", function() {

        const seller: Seller = {
            id: 1,
            name: "Toko Odo",
            nib: "3920183032",
            npwp: "0172832183918",
        };

        seller.name = "Toko Acen";
        // seller.nib = "1232132132";

        console.info(seller);
    });

    it("should support function interface", function() {

        interface AddFunction {
            (value1: number, value2: number): number;
        };

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);

    });

    it("should support indexable interface", function() {

        interface StringArray {
            [index: number]: string;
        };

        const names: StringArray = ["Odo", "Mili", "Moli", "Ijo"];

        console.info(names);
    });

    it("should support indexable interface index for non number", function() {

        interface StringDictionary {
            [key: string]: string;
        };

        const dictionary: StringDictionary = {
            name: "Acen",
            address: "Bekasi",
        };

        expect(dictionary["name"]).toBe("Acen");
        expect(dictionary["address"]).toBe("Bekasi");

    });

    it("should support extend interface", function() {

        const employee: Employee = {
            id: "1",
            name: "Acen",
            division: "Engineer",
        };

        console.info(employee);

        const manager: Manager ={
            id: "11",
            name: "Odo",
            division: "IT",
            numberOfEmployees: 123,
        };

        console.info(manager);

    });

    it("should support function in interface", function() {

        const person: Person ={
            name: "Acen",
            sayHallo: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };

        console.info(person.sayHallo("Odo"));
    });

    it("should support intersection type", function() {

        interface HasName {
            name: string;
        };

        interface HasId {
            id: string;
        };

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: "1",
            name: "Mili",
        };

        console.info(domain);

    });

    it("should support type assertions", function() {

        const person: any = {
            name: "Odo",
            age: 30,
        };

        const person2: Person = person as Person;

        console.info(person2);

    });
});