import { Message } from "@/model/User";

export interface ApiRespoonse{
    success:boolean;
    message:string;
    isAccesptingMessages?:boolean
    messages?:Array<Message>
}