// Function
import { truncateText } from "./truncate-text";
const testFunc = truncateText;

describe("truncateText", () => {

    it("should return truncated text", () => {
        //input
        const text = 'the lazy brown fox jumped over the moon';
        const length = 20;
        //result
        const result = 'the lazy brown fox j...';

        expect(testFunc({text, length})).toEqual(result);
    });

    it("should return original text", () => {
        //input
        const text = 'the lazy brown fox jumped over the moon';
        const length = 60;
        //result
        const result = 'the lazy brown fox jumped over the moon';

        expect(testFunc({text, length})).toEqual(result);
    });

    it("should return empty string", () => {
        //input
        const text = '';
        const length = 60;
        //result
        const result = '';

        expect(testFunc({text, length})).toEqual(result);
    });

});
