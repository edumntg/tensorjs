import { TensorData } from "./types";

export class Tensor {
    private _data: TensorData;

    constructor(data: TensorData) {
        this._data = data;
    }

    public get shape(): TensorData {
        return Tensor._getShape(this._data, []);
    }

    public flatten(dims?: number[]): Tensor {
        let flattened: number[] = [];
        Tensor._flatten(this._data, flattened);
        return new Tensor(flattened);
    }

    private static _dims_flatten(data: TensorData): Tensor {
        return new Tensor([]);
    }

    private static _flatten(data: TensorData, flattened: number[]) {
        for(let item of data) {
            if(Array.isArray(item)) {
                Tensor._flatten(item, flattened);
            } else {
                flattened.push(item)
            }
        }
    }

    private static _getShape(data: TensorData, currentShape: any[]): any[] {
        if(!Array.isArray(data)) {
            return currentShape;
        }

        currentShape.push(data.length);

        return Tensor._getShape(data[0], currentShape);
    }

    private static _constructND(data: TensorData, fillValue: number) {
        const arr: TensorData = [];
        const shape: TensorData = Tensor._getShape(data, []);
        for(let i = 0; i < shape.length; i++) {
            let dim: number = shape[shape.length-1-i];
        }
    }

    
    
}