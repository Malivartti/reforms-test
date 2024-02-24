import { defineStore } from 'pinia'

interface IState {
    userId: number;
    name: string;
};

export const useAuthStore = defineStore('auth', {
    state: (): IState => {
        return {
            userId: 1,
            name: 'Username',
        }
    }
});
