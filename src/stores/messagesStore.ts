import { defineStore } from 'pinia'

 export interface IMessage {
    id: number;
    userId: number;
    body: string;
    sendAt: Date;
}

export interface IState {
    messages: IMessage[]
}

export const useMessagesStore = defineStore('messages', {
    state: (): IState => {
        return {
            messages: [
                {
                    "id":1708798901241,
                    "userId":2,
                    "body":"Hello",
                    "sendAt": new Date("2024-02-24T21:21:41.241")
                },
                {
                    "id":1708798901241,
                    "userId":2,
                    "body":"I'm here",
                    "sendAt": new Date("2024-02-24T21:21:41.242")
                },

            ]
        }
    },
    actions: {
        pushMessage(message: IMessage) {
            this.messages.push(message);
        }
    }
})