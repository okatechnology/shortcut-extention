function handleKeyPress(event) {
  if (event.key === "Enter" && event.target instanceof HTMLTextAreaElement) {
    const textarea = event.target;
    if (textarea.id.startsWith("story-input-") && !event.isComposing) {
      // Do nothing as the input is confirmed and the story should be created.
    } else {
      // Prevent the default behavior (submitting the form) when the input is not confirmed.
      event.preventDefault();
      // Stop other event listeners from being called.
      event.stopImmediatePropagation();
    }
  }
}

document.addEventListener("keydown", handleKeyPress, true);
