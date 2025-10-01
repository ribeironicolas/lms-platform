import { create } from "zustand";

type ConffetiStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useConfettiStore = create<ConffetiStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))