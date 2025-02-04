# TypeScript Date Handling Bug

This repository demonstrates a subtle bug in TypeScript related to date handling within function parameters and return types.  The issue doesn't produce a runtime crash but can lead to unexpected behavior or type-related issues.  The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version.

## Bug Description

The primary issue lies in how TypeScript infers types for date objects and their subsequent manipulation. The function `greet` takes a `Date` object as a parameter. If this date object is modified inside the function, the type safety is not fully preserved in some cases. The solution file offers a more robust approach to maintain type safety and prevent the subtle behavior change.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and observe the code.
3. Compile and run the code.  The output might appear correct, but there's a potential issue with type handling. Then, look at bugSolution.ts for a fixed version.