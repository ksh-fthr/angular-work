export class Logging {
  static info(textAreaElement: HTMLTextAreaElement, message: string): void {
    textAreaElement.value+=message+'\n';
  }
}
