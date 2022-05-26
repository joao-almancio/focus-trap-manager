import { CoreModules } from '@models/core-modules.model';
import { FocusTrapManagerOptions } from 'models/focus-trap-manager-options.model';

export class FocusTrapManager {
  constructor(private readonly options: FocusTrapManagerOptions, private coreModules: CoreModules) {}

  focusContainer(): void {
    throw new Error('Function not implemented');
  }
  focusFirst(): void {
    throw new Error('Function not implemented');
  }
  focusLast(): void {
    throw new Error('Function not implemented');
  }
  focusNext(): void {
    throw new Error('Function not implemented');
  }

  focusPrev(): void {
    throw new Error('Function not implemented');
  }
}
