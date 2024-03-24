export class Caret {
  private readonly isContentEditable: boolean;
  private readonly target: HTMLDivElement;

  /**
   * Constructs a Caret instance.
   * @param {HTMLDivElement} target - The target element to set/get caret position.
   */
  constructor(target: HTMLDivElement) {
    this.isContentEditable =
      target instanceof HTMLElement && target.contentEditable === "true";
    this.target = target;
  }

  /**
   * Gets the caret position.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range}
   * @returns {number} The caret position.
   */
  getPos(): number {
    if (this.isContentEditable) {
      this.target?.focus();
      const _range = document.getSelection()!.getRangeAt(0);
      const range = _range.cloneRange();
      range.selectNodeContents(this.target);
      range.setEnd(_range.endContainer, _range.endOffset);
      return range.toString().length;
    }

    return (this.target as HTMLInputElement).selectionStart!;
  }

  /**
   * Sets the caret position.
   * @param {number} pos - The caret position to set.
   */
  setPos(pos: number): void {
    if (this.isContentEditable) {
      this.target.focus();
      document.getSelection()!.collapse(this.target, pos);
      return;
    }

    (this.target as HTMLInputElement).setSelectionRange(pos, pos);
  }
}
