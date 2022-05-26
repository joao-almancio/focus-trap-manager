import { CoreModules } from '@models/core-modules.model';
import { FocusTrapManagerOptions } from 'models/focus-trap-manager-options.model';

export class FocusTrapManager {
  constructor(private readonly options: FocusTrapManagerOptions, private readonly coreModules: CoreModules) {}

  focusContainer(): void {}
  focusFirst(): void {}
  focusLast(): void {}
  focusNext(): void {}
  focusPrev(): void {}
}
