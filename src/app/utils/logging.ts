export class Logging {
  static info(textAreaElement: HTMLTextAreaElement, message: string): void {
    if (!textAreaElement) return;
    textAreaElement.value += message + '\n';
  }
}
