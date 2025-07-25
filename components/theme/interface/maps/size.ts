export interface SizeMapToken {
  /**
   * @nameZH XXL号尺寸
   * @nameEN Extra Extra Large Size
   * @desc 超超大号尺寸
   * @descEN Extra extra large size
   * @default 48
   */
  sizeXXL: number;
  /**
   * @nameZH XL号尺寸
   * @nameEN Extra Large Size
   * @desc 超大号尺寸
   * @descEN Extra large size
   * @default 32
   */
  sizeXL: number;
  /**
   * @nameZH LG号尺寸
   * @nameEN Large Size
   * @desc 大号尺寸
   * @descEN Large size
   * @default 24
   */
  sizeLG: number;
  /**
   * @nameZH MD号尺寸
   * @nameEN Medium Size
   * @desc 中号尺寸
   * @descEN Medium size
   * @default 20
   */
  sizeMD: number;
  /**
   * @nameZH MS号尺寸
   * @nameEN Medium Small Size
   * @desc 中小号尺寸，默认与 size 相同，但在紧凑模式下可能更大
   * @descEN Medium small size, same as size by default, but could be larger in compact mode
   */
  sizeMS: number;
  /**
   * @nameZH 默认尺寸
   * @nameEN Default Size
   * @desc 默认的尺寸大小，用于各种组件的基础尺寸
   * @descEN Default size value, used as the base size for various components
   * @default 16
   */
  size: number;
  /**
   * @nameZH SM号尺寸
   * @nameEN Small Size
   * @desc 小号尺寸
   * @descEN Small size
   * @default 12
   */
  sizeSM: number;
  /**
   * @nameZH XS号尺寸
   * @nameEN Extra Small Size
   * @desc 超小号尺寸
   * @descEN Extra small size
   * @default 8
   */
  sizeXS: number;
  /**
   * @nameZH XXS号尺寸
   * @nameEN Extra Extra Small Size
   * @desc 超超小号尺寸
   * @descEN Extra extra small size
   * @default 4
   */
  sizeXXS: number;
}

export interface HeightMapToken {
  // Control
  /** Only Used for control inside component like Multiple Select inner selection item */

  /**
   * @nameZH 更小的组件高度
   * @nameEN XS component height
   * @desc 超小号组件高度，用于紧凑型组件或内嵌组件的高度
   * @descEN Extra small component height, used for compact components or embedded components
   */
  controlHeightXS: number;

  /**
   * @nameZH 较小的组件高度
   * @nameEN SM component height
   * @desc 小号组件高度，用于小尺寸的按钮、输入框等控件
   * @descEN Small component height, used for small-sized buttons, input boxes and other controls
   */
  controlHeightSM: number;

  /**
   * @nameZH 较高的组件高度
   * @nameEN LG component height
   * @desc 大号组件高度，用于大尺寸的按钮、输入框等控件
   * @descEN Large component height, used for large-sized buttons, input boxes and other controls
   */
  controlHeightLG: number;

  /**
   * @nameZH 控件高度
   * @nameEN Control Height
   * @desc 控件的默认高度，用于按钮、输入框等组件的高度
   * @descEN Default height of controls, used for buttons, input boxes and other components
   */
  controlHeight: number;
}
