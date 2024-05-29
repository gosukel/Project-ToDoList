import handleDates from "./handleDates";
export default function filterNotes(
    notesList,
    groupName = "all",
    completed = false,
    date = false
) {
    // all active - aka "all upcoming" or "NOTES"
    if (groupName === "all" && (date === false || date === "all-btn")) {
        return notesList.filter((note) => note.completed === false);
    } else if (groupName === "all" && date) {
        // date filters
        if (date === "today-btn") {
            console.log("this is today");
            return notesList.filter((note) => {
                return (
                    handleDates(note.due, "check", "today") &&
                    note.completed === false
                );
            });
        } else if (date === "week-btn") {
            console.log("this is week");
            return notesList.filter((note) => {
                return (
                    handleDates(note.due, "check", "week") &&
                    note.completed === false
                );
            });
        } else if (date === "month-btn") {
            console.log("this is month");
            return notesList.filter((note) => {
                return (
                    handleDates(note.due, "check", "month") &&
                    note.completed === false
                );
            });
        } else if (date === "logs-btn") {
            return notesList.filter((note) => note.completed);
        }
    } else {
        // group filter
        console.log(groupName);
        console.log(notesList);
        return notesList.filter(
            (note) =>
                note.group === groupName.toLowerCase() &&
                note.completed === false
        );
    }
}
