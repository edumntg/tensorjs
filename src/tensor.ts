import { TensorData } from "./types";

export class Tensor {
    private _data: TensorData;

    constructor(data: TensorData) {
        this._data = data;
    }

    private static _getShape(data: TensorData, currentShape: any[]): any[] {
        if(!Array.isArray(data)) {
            return currentShape;
        }

        currentShape.push(data.length);

        return Tensor._getShape(data[0], currentShape);
    }

    public get shape(): any | any[][] {
        return Tensor._getShape(this._data, []);
    }
}