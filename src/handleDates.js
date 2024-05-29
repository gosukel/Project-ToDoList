import { format, isToday, isThisWeek, isThisMonth } from "date-fns";

export default function handleDates(date, mode, compare) {
    if (mode === "make") {
        const rightNow = new Date();
        return rightNow;
    }
    if (mode === "due") {
        const dueDate = new Date(date);
        dueDate.setDate(dueDate.getDate() + 1);

        return dueDate;
    }
    if (mode === "read") {
        const formDate = format(date, "MM/dd");
        return formDate;
    }
    if (mode === "check") {
        if (compare === "today") {
            return isToday(date);
        }
        if (compare === "week") {
            return isThisWeek(date);
        }
        if (compare === "month") {
            return isThisMonth(date);
        }
    }
}
