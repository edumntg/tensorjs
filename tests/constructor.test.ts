import { Tensor } from "../src/tensor";

describe("Testing package constructor", () => {
    let t: Tensor;

    test("Test single shape", () => {
        t = new Tensor([1,2,3]);
        expect(t.shape).toEqual([3]);
    })

    test("Test 2D shape", () => {
        t = new Tensor([[1,2,3],[4,5,6]]);
        expect(t.shape).toEqual([2, 3]);
    })

    test("Test 3D shape", () => {
        t = new Tensor([[[1,2,3]]]);
        expect(t.shape).toEqual([1, 1, 3]);
    })
})