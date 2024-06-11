import { writable } from "svelte/store"

interface User {
    name: string|null,
    uuid: string,
}

export const logged = writable<User>({
    name: "Hidekoooo",
    uuid: "a1f9544c-77f6-4d00-b16b-9300e3f47ced",
})