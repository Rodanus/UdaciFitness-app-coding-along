export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES",
    ADD_ENTRY = "ADD_ENTRY";

export function receiveEntries(entries) {
    return {
        type: RECEIVE_ENTRIES,
        entries
    }
}

export function addEntry(entry) {
    return {
        type: ADD_ENTRY,
        entry
    }
}