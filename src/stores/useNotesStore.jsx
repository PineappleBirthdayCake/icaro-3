import { create } from 'zustand'

const useNotesStore = create((set) => ({
    notes: [{ id: 1, title: "Bienvenido", body: "Haz click en cualquier titulo o descripcion para cambiarlo, o en + para una nota nueva.", completed: false, createdAt: Date.now() - 8000000 },],

    addNote: () =>
        set((s) => {
            const id = Date.now();
            return {
                notes: [{ id, title: "", body: "", completed: false, createdAt: Date.now() }, ...s.notes],
            };
        }),

    completeNote: (id) =>
        set((s) => ({ notes: s.notes.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n)) })),

    updateNote: (id, patch) =>
        set((s) => ({ notes: s.notes.map((n) => (n.id === id ? { ...n, ...patch } : n)) })),

    deleteNote: (id) =>
        set((s) => {
            const remaining = s.notes.filter((n) => n.id !== id);
            const newActive = remaining.find((n) => n.id !== id)?.id ?? remaining[0]?.id ?? null;
            return { notes: remaining, activeId: s.activeId === id ? newActive : s.activeId };
        }),


}));

export default useNotesStore