export interface FontMapToken {
  // Font Size
  /**
   * @nameZH 小号字体
   * @nameEN Small Font Size
   * @desc 小号字体大小
   * @descEN Small font size
   */
  fontSizeSM: number;
  /**
   * @nameZH 默认字体大小
   * @nameEN Default Font Size
   * @desc 默认的字体大小
   * @descEN Default font size
   */
  fontSize: number;
  /**
   * @nameZH 大号字体
   * @nameEN Large Font Size
   * @desc 大号字体大小
   * @descEN Large font size
   */
  fontSizeLG: number;
  /**
   * @nameZH 超大号字体
   * @nameEN Extra Large Font Size
   * @desc 超大号字体大小
   * @descEN Extra large font size
   */
  fontSizeXL: number;

  /**
   * @nameZH 一级标题字号
   * @nameEN Heading 1 Font Size
   * @desc H1 标签所使用的字号
   * @descEN Font size used for H1 tags
   * @default 38
   */
  fontSizeHeading1: number;
  /**
   * @nameZH 二级标题字号
   * @nameEN Heading 2 Font Size
   * @desc h2 标签所使用的字号
   * @descEN Font size used for H2 tags
   * @default 30
   */
  fontSizeHeading2: number;
  /**
   * @nameZH 三级标题字号
   * @nameEN Heading 3 Font Size
   * @desc h3 标签使用的字号
   * @descEN Font size used for H3 tags
   * @default 24
   */
  fontSizeHeading3: number;
  /**
   * @nameZH 四级标题字号
   * @nameEN Heading 4 Font Size
   * @desc h4 标签使用的字号
   * @descEN Font size used for H4 tags
   * @default 20
   */
  fontSizeHeading4: number;
  /**
   * @nameZH 五级标题字号
   * @nameEN Heading 5 Font Size
   * @desc h5 标签使用的字号
   * @descEN Font size used for H5 tags
   * @default 16
   */
  fontSizeHeading5: number;

  // LineHeight
  /**
   * @nameZH 默认行高
   * @nameEN Default Line Height
   * @desc 默认的行高值
   * @descEN Default line height value
   */
  lineHeight: number;
  /**
   * @nameZH 大号行高
   * @nameEN Large Line Height
   * @desc 大号的行高值
   * @descEN Large line height value
   */
  lineHeightLG: number;
  /**
   * @nameZH 小号行高
   * @nameEN Small Line Height
   * @desc 小号的行高值
   * @descEN Small line height value
   */
  lineHeightSM: number;

  /**
   * @nameZH 一级标题行高
   * @nameEN Heading 1 Line Height
   * @desc H1 标签所使用的行高
   * @descEN Line height used for H1 tags
   */
  lineHeightHeading1: number;
  /**
   * @nameZH 二级标题行高
   * @nameEN Heading 2 Line Height
   * @desc H2 标签所使用的行高
   * @descEN Line height used for H2 tags
   */
  lineHeightHeading2: number;
  /**
   * @nameZH 三级标题行高
   * @nameEN Heading 3 Line Height
   * @desc H3 标签所使用的行高
   * @descEN Line height used for H3 tags
   */
  lineHeightHeading3: number;
  /**
   * @nameZH 四级标题行高
   * @nameEN Heading 4 Line Height
   * @desc H4 标签所使用的行高
   * @descEN Line height used for H4 tags
   */
  lineHeightHeading4: number;
  /**
   * @nameZH 五级标题行高
   * @nameEN Heading 5 Line Height
   * @desc H5 标签所使用的行高
   * @descEN Line height used for H5 tags
   */
  lineHeightHeading5: number;
}
