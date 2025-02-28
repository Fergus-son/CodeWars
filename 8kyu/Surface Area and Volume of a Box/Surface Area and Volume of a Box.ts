function getSize(width, height, depth) {
    const area = 2 * (depth * width + depth * height + width * height);
    const volume = depth * width * height;

    return [area, volume]
}

console.log(getSize(4, 19, 10))



// Sample Test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.deepEqual(getSize(4, 2, 6), [88, 48]);
//         assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
//         assert.deepEqual(getSize(4, 2, 6)[0], 88);
//         assert.deepEqual(getSize(4, 2, 6)[1], 48);
//     })
// });
