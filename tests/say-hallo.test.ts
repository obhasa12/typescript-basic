import { sayHallo } from "../src/say-hallo"

describe('sayHallo', function() {
    it('should return hallo acen', function() {
        expect(sayHallo('acen')).toBe('Hallo acen')
    })
})