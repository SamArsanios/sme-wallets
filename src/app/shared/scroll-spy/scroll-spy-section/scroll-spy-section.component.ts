import { Component, Input } from '@angular/core';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

/**
 * A component to wrap section content within that will update the
 * `ScrollSpyService` when it's in view
 *
 * @example
 * ```html
 *  <sn-scroll-spy-section id="section1" for="foo">
 *    ...
 *  </sn-scroll-spy-section>
 * ```
 */
@Component({
  selector: 'sn-scroll-spy-section',
  templateUrl: './scroll-spy-section.component.html',
  styleUrls: ['./scroll-spy-section.component.scss'],
})
export class ScrollSpySectionComponent {
  /**
   * Identifies the section
   *
   * @memberof ScrollSpySectionComponent
   */
  @Input()
  public id: string;
  /**
   * Specifies which `ScrollSpy` instance to update
   *
   * @memberof ScrollSpySectionComponent
   */
  @Input()
  public for: string;
  /**
   * Creates an instance of ScrollSpySectionComponent.
   * @memberof ScrollSpySectionComponent
   */
  constructor(private scrollSpySvc: ScrollSpyService) {}
  /**
   * Updates `ScrollSpy` section when element enters/leaves viewport
   *
   * @memberof ScrollSpySectionComponent
   */
  public onInViewportChange(inViewport: boolean): void {
    this.scrollSpySvc.setSpySectionStatus(this.id, this.for, inViewport);
  }
}
