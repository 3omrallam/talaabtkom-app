export interface User {
    data : {
        token: String;
        name: String;
        has_media : Boolean;
        media : Array<String>
    },
    success : Boolean,
    message : String
}
