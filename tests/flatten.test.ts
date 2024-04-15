import { Tensor } from "../src/tensor";

describe("Test flatten function", () => {
    let tensor: Tensor;
    let expected: Tensor;

    test("Test 2D shape", () => {
        tensor = new Tensor([[1,2,3],[4,5,6]]);
        console.log(tensor.flatten());
        expect(tensor.shape).toEqual([2, 3]);
    })

    test("Test 3D shape", () => {
        tensor = new Tensor([
            [[1,  2],
            [3, 4]],
   
            [[5,  6],
            [7, 8]]]);

        expected = new Tensor([1,2,3,4,5,6,7,8]);
        expect(tensor.flatten()).toEqual(expected);
    })
})