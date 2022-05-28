// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId } from '@dust-defi/types/interfaces/primitives';
import type { Enum } from '@polkadot/types';

/** @name PoolId */
export interface PoolId extends Enum {
  readonly isLoans: boolean;
  readonly asLoans: CurrencyId;
  readonly isDexIncentive: boolean;
  readonly asDexIncentive: CurrencyId;
  readonly isDexSaving: boolean;
  readonly asDexSaving: CurrencyId;
  readonly isHoma: boolean;
}

export type PHANTOM_INCENTIVES = 'incentives';
