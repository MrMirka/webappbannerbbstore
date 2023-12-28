import { create } from 'zustand'
import { logOut, signEmailPass } from '../network/repository'

type State = {
    autorizationStatus: boolean,
    token: string,
    error: boolean
}

type Actions = {
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
};



export const useStore = create<State & Actions>((set) => ({
    autorizationStatus: false,
    token: '',
    error: false,

    logIn: async (email: string, password: string) => {
        if (!useStore.getState().autorizationStatus) {
            try {
                const response = await signEmailPass(email, password);
                if (response) {
                    set({ error: false, autorizationStatus: true, token: response.uid });
                }
            } catch (error) {
                console.error('Ошибка авторизации:', error);
                set({ error: true });
            }
        }
    },
    logOut: async () => {
        if (useStore.getState().autorizationStatus) {
            try {
                const status = await logOut();
                set({ autorizationStatus: !status });
                if (!status) set({ token: '' });
            } catch (error) {
                console.error('Ошибка выхода:', error);
            }
        }
    }
}));
