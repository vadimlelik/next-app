import {SortEnum} from "../../components/Sort/SortProps";
import {ProductModel} from "../../interfaces/product.interface";


export type SortActionType = { type: SortEnum.Price } | { type: SortEnum.Rating }


export interface SortReducerState {
    sort: SortEnum
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortActionType): SortReducerState => {
    switch (action.type) {
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        default :
            return state;

    }
}