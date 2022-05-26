import { FocusTrapManagerOptions } from '@models/focus-trap-manager-options.model';
import { FocusTrapManager } from 'focus-trap-manager';

type UseFocusTrapManager = (options: FocusTrapManagerOptions) => FocusTrapManager;
export const useFocusTrapManager: UseFocusTrapManager = (_options) => {
  throw new Error('Function not implemented');
};
