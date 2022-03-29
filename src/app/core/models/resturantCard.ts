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
    delivery_range:number,
    rate : Number,
    closed:boolean,
    num_table:number,
    avg_delivery_time:number,
    media: Array<mediaCard>
    has_media:boolean;
    tags: Array<tagsCard>,
    market_status:any;
}
export interface ResturantCard {
    data : Array<SingleCard>,
    success : String,
    message : String
}