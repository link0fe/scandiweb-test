import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        
        this._types = [ 
            {id: 1, name: 'Books'},
            {id: 2, name: 'Chairs'},
            {id: 3, name: 'Discs'}
        ]
        this._products = [
            {id: 1, sku:'GGWP123', name:'War and Peace', price: 10, weight: 2},
            {id: 2, sku:'GGWP123', name:'War and Peace', price: 10, weight: 2},
            {id: 3, sku:'GGWP123', name:'War and Peace', price: 10, weight: 2},
            {id: 4, sku:'GGWP123', name:'War and Peace', price: 10, weight: 2},
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setProducts(products) {
        this._products = products;
    }

    get types() {
        return this._types;
    }
    get product() {
        return this._products;
    }
}