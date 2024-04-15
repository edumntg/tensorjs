import { Tensor } from "../src/tensor";

describe("Testing package constructor", () => {
    let t: Tensor;

    test("Test shape", () => {
        t = new Tensor([[[1,2,3]]]);
        expect(t.shape).toEqual([1,1,3]);
    })
})