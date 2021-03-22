// Component Base Class
namespace App {
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateElement = <HTMLTemplateElement>(
        document.getElementById(templateId)!
      );
      //as HTMLTemplateElement
      this.hostElement = <T>document.getElementById(hostElementId)!; // as T

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = <U>importedNode.firstElementChild; // as U
      if (newElementId) {
        this.element.id = newElementId;
      }

      this.attach(insertAtStart);
    }

    private attach(insertAtBegining: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBegining ? 'afterbegin' : 'beforeend',
        this.element
      );
    }

    abstract configure(): void;
    abstract renderContent(): void;
  }
}