import { resturantCardBlockList } from "./resturantCardBlockModel";

export interface resturantMenuList {
    Header: string,
    id: string,
    subList: resturantCardBlockList[],
}