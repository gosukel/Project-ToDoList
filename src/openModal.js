import openNoteModal from "./openNoteModal";
import openGroupModal from "./openGroupModal";
export default function openModal(groups, modalId) {
    modalId === "#add-note-modal" && openNoteModal(groups, modalId);
    modalId === "#add-group-modal" && openGroupModal(groups, modalId);
}
