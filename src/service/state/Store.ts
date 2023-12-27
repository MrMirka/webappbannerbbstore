import { create } from 'zustand'
import { logOut, signEmailPass } from '../network/repository'

export const useStore = create((set) => ({
    autorizationStatus: false,
    token: null,
    auth: async (email: string, password: string) => {
        set(async (state: any) => {
            if (!state.autorizationStatus) {
                try {
                    const status = await signEmailPass(email, password);
                    if (status) {
                        set({ autorizationStatus: true })
                        set({ token: status.uid })
                    }
                } catch (error) {
                    console.error('Ошибка авторизации:', error);
                    throw new Error('Ошибка авторизации');
                }
                return;
            }

        });
    },
    logOut: async () => {
        set(async (state: any) => {
            if (state.autorizationStatus) {
                try {
                    const status = await logOut();
                    set({ autorizationStatus: status })
                    if(!status) set({ token: null })
                } catch (error) {
                    console.error('Ошибка выхода:', error);
                    throw new Error('Ошибка выхода');
                }
                return;
            }

        });
    }
}));

