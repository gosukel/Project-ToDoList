import makeImage from "./makeImage";
import makeButton from "./makeButton";
import bookSvg from "./utils/book.svg";
import calenderWeekSvg from "./utils/calendar-week.svg";
import calender3Svg from "./utils/calendar3.svg";
import stackSvg from "./utils/stack.svg";
import starFillSvg from "./utils/star-fill.svg";

// url: "../src/utils/star-fill.svg",
const topSidebarItems = [
    {
        divClass: "note-list-top-item",
        divId: "today-div",
        img: {
            url: starFillSvg,
            id: "star-logo",
            class: "logo-svg",
        },
        btn: {
            buttonText: "Today",
            buttonClass: "note-list-top-btn",
            buttonId: "today-btn",
        },
    },
    {
        divClass: "note-list-top-item",
        divId: "week-div",
        img: {
            url: calenderWeekSvg,
            id: "week-logo",
            class: "logo-svg",
        },
        btn: {
            buttonText: "This Week",
            buttonClass: "note-list-top-btn",
            buttonId: "week-btn",
        },
    },
    {
        divClass: "note-list-top-item",
        divId: "month-div",
        img: {
            url: calender3Svg,
            id: "month-logo",
            class: "logo-svg",
        },
        btn: {
            buttonText: "This Month",
            buttonClass: "note-list-top-btn",
            buttonId: "month-btn",
        },
    },
    {
        divClass: "note-list-top-item",
        divId: "all-div",
        img: {
            url: stackSvg,
            id: "stack-logo",
            class: "logo-svg",
        },
        btn: {
            buttonText: "All Upcoming",
            buttonClass: "note-list-top-btn",
            buttonId: "all-btn",
        },
    },
    {
        divClass: "note-list-top-item",
        divId: "logs-div",
        img: {
            url: bookSvg,
            id: "logs-logo",
            class: "logo-svg",
        },
        btn: {
            buttonText: "Check Logs",
            buttonClass: "note-list-top-btn",
            buttonId: "logs-btn",
        },
    },
];

export default function makeTopSidebar() {
    const parentDiv = document.querySelector("#sidebar-top-container");
    for (let item of topSidebarItems) {
        let newDiv = document.createElement("div");
        newDiv.classList.add(item.divClass);
        item.divId && newDiv.setAttribute("id", item.divId);
        parentDiv.appendChild(newDiv);
        let img = makeImage(item.img);
        newDiv.appendChild(img);
        let btn = makeButton(item.btn);
        newDiv.appendChild(btn);
    }
}
