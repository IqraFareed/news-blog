import { describe, test, it, expect } from "vitest";
import { fizzBuzz } from "../components/intro";
// describe("max", () => {
//   it("should return the first argument if it is greater", () => {
//     /// AAA
//     // Arrange
//     const a = 2;
//     const b = 1;

//     //Act
//     const result = max(a, b);

//     //Assert
//     expect(result).toBe(2);
//     /// be is a matcher

//     /// we can do the above in a combine form
//     // expect(max(2, 1)).toBe(2);
//   });
// });

// describe("max", () => {
//   it("should return the second argument if it is greater", () => {
//     /// we can do the above in a combine form
//     expect(max(1, 2)).toBe(2);
//   });
// });

// describe("max", () => {
//   it("should return the first argument if arguments are equal", () => {
//     /// we can do the above in a combine form
//     expect(max(1, 1)).toBe(1);
//   });
// });

describe("fizzBuzz", () => {
  it("should return the FizzBuzz if  argument is divisible by 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuss");
  });
  it("should return the Fizz if  argument only is divisible  3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return the Buzz if  argument is only divisible  5", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
  it("should return  argument as a string if its not divisiible by 3 or 5", () => {
    expect(fizzBuzz(17)).toBe("17");
  });
});
