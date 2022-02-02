export interface tagsCard {
    name:string,
}
export interface mediaCard{
    file_name:string,
    url:string,
    thumb:string
    icon:string
}
export interface SingleCard {
    id : Number,
    name : String,
    time : Number,
    rate : Number,
    closed:boolean,
    num_table:number,
    media: Array<mediaCard>
    tags: Array<tagsCard>
}
export interface ResturantCard {
    data : Array<SingleCard>,
    success : String,
    message : String
}