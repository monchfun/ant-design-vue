import type { ColorPalettes } from '../presetColors';
import type { SeedToken } from '../seeds';
import type { SizeMapToken, HeightMapToken } from './size';
import type { ColorMapToken } from './colors';
import type { StyleMapToken } from './style';
import type { FontMapToken } from './font';

export * from './colors';
export * from './style';
export * from './size';
export * from './font';

export interface CommonMapToken extends StyleMapToken {
  // Motion
  /**
   * @nameZH 快速动画时长
   * @nameEN Fast Motion Duration
   * @desc 快速动画的持续时间
   * @descEN Duration for fast animations
   */
  motionDurationFast: string;
  /**
   * @nameZH 中等动画时长
   * @nameEN Medium Motion Duration
   * @desc 中等速度动画的持续时间
   * @descEN Duration for medium speed animations
   */
  motionDurationMid: string;
  /**
   * @nameZH 慢速动画时长
   * @nameEN Slow Motion Duration
   * @desc 慢速动画的持续时间
   * @descEN Duration for slow animations
   */
  motionDurationSlow: string;
}

// ======================================================================
// ==                         Map Token                         ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface MapToken
  extends SeedToken,
    ColorPalettes,
    ColorMapToken,
    SizeMapToken,
    HeightMapToken,
    StyleMapToken,
    FontMapToken,
    CommonMapToken {}
