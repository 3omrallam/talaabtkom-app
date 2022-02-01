export interface SingleCard {
    id : Number,
    name : String,
    description : String,
    address : String,
    image : String,
    status : String,
    title : String,
    time : Number,
    table : Number,
    rate : Number,
    liked : String,
    logo : String,
}
export interface ResturantCard {
    data : Array<SingleCard>,
    success : String,
    message : String
}