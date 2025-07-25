import type { CSSProperties } from 'vue';
import type { MapToken } from './maps';

// ======================================================================
// ==                           Alias Token                            ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥

export interface AliasToken extends MapToken {
  // Background
  /**
   * @nameZH 填充色悬浮态
   * @nameEN Fill Content Hover Color
   * @desc 填充色的悬浮态颜色
   * @descEN Hover state color for fill content
   */
  colorFillContentHover: string;
  /**
   * @nameZH 替代填充色
   * @nameEN Alternative Fill Color
   * @desc 替代的填充色，用于区分不同区域
   * @descEN Alternative fill color, used to distinguish different areas
   */
  colorFillAlter: string;
  /**
   * @nameZH 内容填充色
   * @nameEN Content Fill Color
   * @desc 内容区域的填充色
   * @descEN Fill color for content areas
   */
  colorFillContent: string;

  /**
   * @nameZH 容器禁用背景色
   * @nameEN Container Disabled Background Color
   * @desc 容器禁用状态的背景色
   * @descEN Background color for disabled container state
   */
  colorBgContainerDisabled: string;
  /**
   * @nameZH 文本悬浮背景色
   * @nameEN Text Hover Background Color
   * @desc 文本悬浮时的背景色
   * @descEN Background color when text is hovered
   */
  colorBgTextHover: string;
  /**
   * @nameZH 文本激活背景色
   * @nameEN Text Active Background Color
   * @desc 文本激活时的背景色
   * @descEN Background color when text is active
   */
  colorBgTextActive: string;

  // Border
  /**
   * @nameZH 边框背景色
   * @nameEN Border Background Color
   * @desc 边框的背景色
   * @descEN Background color for borders
   */
  colorBorderBg: string;
  /**
   * @nameZH 分割线颜色
   * @nameEN Split Line Color
   * @desc 用于作为分割线的颜色，此颜色和 colorBorderSecondary 的颜色一致，但是用的是透明色。
   * @descEN Color used as a dividing line. This color is the same as colorBorderSecondary, but uses transparent color.
   */
  colorSplit: string;

  // Text
  /**
   * @nameZH 占位符文本色
   * @nameEN Placeholder Text Color
   * @desc 占位符文本的颜色
   * @descEN Color for placeholder text
   */
  colorTextPlaceholder: string;
  /**
   * @nameZH 禁用文本色
   * @nameEN Disabled Text Color
   * @desc 禁用状态下的文本颜色
   * @descEN Text color in disabled state
   */
  colorTextDisabled: string;
  /**
   * @nameZH 标题文本色
   * @nameEN Heading Text Color
   * @desc 标题文本的颜色
   * @descEN Color for heading text
   */
  colorTextHeading: string;
  /**
   * @nameZH 标签文本色
   * @nameEN Label Text Color
   * @desc 标签文本的颜色
   * @descEN Color for label text
   */
  colorTextLabel: string;
  /**
   * @nameZH 描述文本色
   * @nameEN Description Text Color
   * @desc 描述文本的颜色
   * @descEN Color for description text
   */
  colorTextDescription: string;
  /**
   * @nameZH 亮色实心文本色
   * @nameEN Light Solid Text Color
   * @desc 亮色实心背景上的文本颜色
   * @descEN Text color on light solid background
   */
  colorTextLightSolid: string;

  /**
   * @nameZH 图标颜色
   * @nameEN Icon Color
   * @desc 弱操作图标颜色，如 allowClear 或 Alert 关闭按钮
   * @descEN Weak action icon color. Such as `allowClear` or Alert close button
   */
  colorIcon: string;
  /**
   * @nameZH 图标悬浮颜色
   * @nameEN Icon Hover Color
   * @desc 弱操作图标悬浮颜色，如 allowClear 或 Alert 关闭按钮
   * @descEN Weak action hover color. Such as `allowClear` or Alert close button
   */
  colorIconHover: string;

  /**
   * @nameZH 链接颜色
   * @nameEN Link Color
   * @desc 链接的默认颜色
   * @descEN Default color for links
   */
  colorLink: string;
  /**
   * @nameZH 链接悬浮颜色
   * @nameEN Link Hover Color
   * @desc 链接悬浮时的颜色
   * @descEN Color for links when hovered
   */
  colorLinkHover: string;
  /**
   * @nameZH 链接激活颜色
   * @nameEN Link Active Color
   * @desc 链接激活时的颜色
   * @descEN Color for links when active
   */
  colorLinkActive: string;

  /**
   * @nameZH 高亮颜色
   * @nameEN Highlight Color
   * @desc 高亮显示的颜色
   * @descEN Color for highlighting
   */
  colorHighlight: string;

  /**
   * @nameZH 控件轮廓色
   * @nameEN Control Outline Color
   * @desc 控件的轮廓颜色
   * @descEN Outline color for controls
   */
  controlOutline: string;
  /**
   * @nameZH 警告轮廓色
   * @nameEN Warning Outline Color
   * @desc 警告状态的轮廓颜色
   * @descEN Outline color for warning state
   */
  colorWarningOutline: string;
  /**
   * @nameZH 错误轮廓色
   * @nameEN Error Outline Color
   * @desc 错误状态的轮廓颜色
   * @descEN Outline color for error state
   */
  colorErrorOutline: string;

  // Font
  /**
   * @nameZH 图标字体大小
   * @nameEN Icon Font Size
   * @desc Select、Cascader 等组件中操作图标的字体大小，通常与 fontSizeSM 相同
   * @descEN Operation icon in Select, Cascader, etc. icon fontSize. Normal is same as fontSizeSM
   */
  fontSizeIcon: number;

  /**
   * @nameZH 强调字体粗细
   * @nameEN Strong Font Weight
   * @desc 用于标题如 h1、h2、h3 或选中项的字体粗细
   * @descEN For heading like h1, h2, h3 or option selected item
   */
  fontWeightStrong: number;

  // Control
  /**
   * @nameZH 控件轮廓宽度
   * @nameEN Control Outline Width
   * @desc 控件轮廓的宽度
   * @descEN Width of control outline
   */
  controlOutlineWidth: number;
  /**
   * @nameZH 控件项悬浮背景色
   * @nameEN Control Item Hover Background Color
   * @desc 控件项悬浮时的背景色
   * @descEN Background color when control item is hovered
   */
  controlItemBgHover: string; // Note. It also is a color
  /**
   * @nameZH 控件项激活背景色
   * @nameEN Control Item Active Background Color
   * @desc 控件项激活时的背景色
   * @descEN Background color when control item is active
   */
  controlItemBgActive: string; // Note. It also is a color
  /**
   * @nameZH 控件项激活悬浮背景色
   * @nameEN Control Item Active Hover Background Color
   * @desc 控件项激活且悬浮时的背景色
   * @descEN Background color when control item is active and hovered
   */
  controlItemBgActiveHover: string; // Note. It also is a color
  /**
   * @nameZH 控件交互尺寸
   * @nameEN Control Interactive Size
   * @desc 控件交互区域的尺寸
   * @descEN Size of control interactive area
   */
  controlInteractiveSize: number;
  /**
   * @nameZH 控件项激活禁用背景色
   * @nameEN Control Item Active Disabled Background Color
   * @desc 控件项激活且禁用时的背景色
   * @descEN Background color when control item is active and disabled
   */
  controlItemBgActiveDisabled: string; // Note. It also is a color

  // Padding
  /**
   * @nameZH 极小内边距
   * @nameEN Extra Extra Small Padding
   * @desc 极小尺寸的内边距
   * @descEN Extra extra small size padding
   */
  paddingXXS: number;
  /**
   * @nameZH 超小内边距
   * @nameEN Extra Small Padding
   * @desc 超小尺寸的内边距
   * @descEN Extra small size padding
   */
  paddingXS: number;
  /**
   * @nameZH 小内边距
   * @nameEN Small Padding
   * @desc 小尺寸的内边距
   * @descEN Small size padding
   */
  paddingSM: number;
  /**
   * @nameZH 默认内边距
   * @nameEN Default Padding
   * @desc 默认尺寸的内边距
   * @descEN Default size padding
   */
  padding: number;
  /**
   * @nameZH 中等内边距
   * @nameEN Medium Padding
   * @desc 中等尺寸的内边距
   * @descEN Medium size padding
   */
  paddingMD: number;
  /**
   * @nameZH 大内边距
   * @nameEN Large Padding
   * @desc 大尺寸的内边距
   * @descEN Large size padding
   */
  paddingLG: number;
  /**
   * @nameZH 超大内边距
   * @nameEN Extra Large Padding
   * @desc 超大尺寸的内边距
   * @descEN Extra large size padding
   */
  paddingXL: number;

  // Padding Content
  /**
   * @nameZH 大号内容水平内边距
   * @nameEN Large Content Horizontal Padding
   * @desc 大尺寸内容区域的水平内边距
   * @descEN Large size content area horizontal padding
   */
  paddingContentHorizontalLG: number;
  /**
   * @nameZH 内容水平内边距
   * @nameEN Content Horizontal Padding
   * @desc 内容区域的水平内边距
   * @descEN Content area horizontal padding
   */
  paddingContentHorizontal: number;
  /**
   * @nameZH 小号内容水平内边距
   * @nameEN Small Content Horizontal Padding
   * @desc 小尺寸内容区域的水平内边距
   * @descEN Small size content area horizontal padding
   */
  paddingContentHorizontalSM: number;
  /**
   * @nameZH 大号内容垂直内边距
   * @nameEN Large Content Vertical Padding
   * @desc 大尺寸内容区域的垂直内边距
   * @descEN Large size content area vertical padding
   */
  paddingContentVerticalLG: number;
  /**
   * @nameZH 内容垂直内边距
   * @nameEN Content Vertical Padding
   * @desc 内容区域的垂直内边距
   * @descEN Content area vertical padding
   */
  paddingContentVertical: number;
  /**
   * @nameZH 小号内容垂直内边距
   * @nameEN Small Content Vertical Padding
   * @desc 小尺寸内容区域的垂直内边距
   * @descEN Small size content area vertical padding
   */
  paddingContentVerticalSM: number;

  // Margin
  /**
   * @nameZH 极小外边距
   * @nameEN Extra Extra Small Margin
   * @desc 极小尺寸的外边距
   * @descEN Extra extra small size margin
   */
  marginXXS: number;
  /**
   * @nameZH 超小外边距
   * @nameEN Extra Small Margin
   * @desc 超小尺寸的外边距
   * @descEN Extra small size margin
   */
  marginXS: number;
  /**
   * @nameZH 小外边距
   * @nameEN Small Margin
   * @desc 小尺寸的外边距
   * @descEN Small size margin
   */
  marginSM: number;
  /**
   * @nameZH 默认外边距
   * @nameEN Default Margin
   * @desc 默认尺寸的外边距
   * @descEN Default size margin
   */
  margin: number;
  /**
   * @nameZH 中等外边距
   * @nameEN Medium Margin
   * @desc 中等尺寸的外边距
   * @descEN Medium size margin
   */
  marginMD: number;
  /**
   * @nameZH 大外边距
   * @nameEN Large Margin
   * @desc 大尺寸的外边距
   * @descEN Large size margin
   */
  marginLG: number;
  /**
   * @nameZH 超大外边距
   * @nameEN Extra Large Margin
   * @desc 超大尺寸的外边距
   * @descEN Extra large size margin
   */
  marginXL: number;
  /**
   * @nameZH 极大外边距
   * @nameEN Extra Extra Large Margin
   * @desc 极大尺寸的外边距
   * @descEN Extra extra large size margin
   */
  marginXXL: number;

  // =============== Legacy: should be remove ===============
  /**
   * @nameZH 加载不透明度
   * @nameEN Loading Opacity
   * @desc 加载状态下的不透明度
   * @descEN Opacity for loading state
   */
  opacityLoading: number;

  /**
   * @nameZH 基础阴影
   * @nameEN Base Shadow
   * @desc 基础阴影样式，用于大部分组件的阴影效果
   * @descEN Base shadow style, used for shadow effects of most components
   */
  boxShadow: string;
  /**
   * @nameZH 二级阴影
   * @nameEN Secondary Shadow
   * @desc 二级阴影样式，用于需要更明显阴影效果的组件
   * @descEN Secondary shadow style, used for components that need more prominent shadow effects
   */
  boxShadowSecondary: string;
  /**
   * @nameZH 三级阴影
   * @nameEN Tertiary Shadow
   * @desc 三级阴影样式，用于需要最强阴影效果的组件
   * @descEN Tertiary shadow style, used for components that need the strongest shadow effects
   */
  boxShadowTertiary: string;

  /**
   * @nameZH 链接装饰
   * @nameEN Link Decoration
   * @desc 链接的文本装饰样式
   * @descEN Text decoration style for links
   */
  linkDecoration: CSSProperties['textDecoration'];
  /**
   * @nameZH 链接悬浮装饰
   * @nameEN Link Hover Decoration
   * @desc 链接悬浮时的文本装饰样式
   * @descEN Text decoration style for links when hovered
   */
  linkHoverDecoration: CSSProperties['textDecoration'];
  /**
   * @nameZH 链接聚焦装饰
   * @nameEN Link Focus Decoration
   * @desc 链接聚焦时的文本装饰样式
   * @descEN Text decoration style for links when focused
   */
  linkFocusDecoration: CSSProperties['textDecoration'];

  /**
   * @nameZH 控件水平内边距
   * @nameEN Control Horizontal Padding
   * @desc 控件的水平内边距
   * @descEN Horizontal padding for controls
   */
  controlPaddingHorizontal: number;
  /**
   * @nameZH 小号控件水平内边距
   * @nameEN Small Control Horizontal Padding
   * @desc 小尺寸控件的水平内边距
   * @descEN Horizontal padding for small size controls
   */
  controlPaddingHorizontalSM: number;

  // Media queries breakpoints
  /**
   * @nameZH 超小屏幕断点
   * @nameEN Extra Small Screen Breakpoint
   * @desc 超小屏幕的断点尺寸
   * @descEN Breakpoint size for extra small screens
   */
  screenXS: number;
  /**
   * @nameZH 超小屏幕最小断点
   * @nameEN Extra Small Screen Min Breakpoint
   * @desc 超小屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for extra small screens
   */
  screenXSMin: number;
  /**
   * @nameZH 超小屏幕最大断点
   * @nameEN Extra Small Screen Max Breakpoint
   * @desc 超小屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for extra small screens
   */
  screenXSMax: number;
  /**
   * @nameZH 小屏幕断点
   * @nameEN Small Screen Breakpoint
   * @desc 小屏幕的断点尺寸
   * @descEN Breakpoint size for small screens
   */
  screenSM: number;
  /**
   * @nameZH 小屏幕最小断点
   * @nameEN Small Screen Min Breakpoint
   * @desc 小屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for small screens
   */
  screenSMMin: number;
  /**
   * @nameZH 小屏幕最大断点
   * @nameEN Small Screen Max Breakpoint
   * @desc 小屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for small screens
   */
  screenSMMax: number;
  /**
   * @nameZH 中等屏幕断点
   * @nameEN Medium Screen Breakpoint
   * @desc 中等屏幕的断点尺寸
   * @descEN Breakpoint size for medium screens
   */
  screenMD: number;
  /**
   * @nameZH 中等屏幕最小断点
   * @nameEN Medium Screen Min Breakpoint
   * @desc 中等屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for medium screens
   */
  screenMDMin: number;
  /**
   * @nameZH 中等屏幕最大断点
   * @nameEN Medium Screen Max Breakpoint
   * @desc 中等屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for medium screens
   */
  screenMDMax: number;
  /**
   * @nameZH 大屏幕断点
   * @nameEN Large Screen Breakpoint
   * @desc 大屏幕的断点尺寸
   * @descEN Breakpoint size for large screens
   */
  screenLG: number;
  /**
   * @nameZH 大屏幕最小断点
   * @nameEN Large Screen Min Breakpoint
   * @desc 大屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for large screens
   */
  screenLGMin: number;
  /**
   * @nameZH 大屏幕最大断点
   * @nameEN Large Screen Max Breakpoint
   * @desc 大屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for large screens
   */
  screenLGMax: number;
  /**
   * @nameZH 超大屏幕断点
   * @nameEN Extra Large Screen Breakpoint
   * @desc 超大屏幕的断点尺寸
   * @descEN Breakpoint size for extra large screens
   */
  screenXL: number;
  /**
   * @nameZH 超大屏幕最小断点
   * @nameEN Extra Large Screen Min Breakpoint
   * @desc 超大屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for extra large screens
   */
  screenXLMin: number;
  /**
   * @nameZH 超大屏幕最大断点
   * @nameEN Extra Large Screen Max Breakpoint
   * @desc 超大屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for extra large screens
   */
  screenXLMax: number;
  /**
   * @nameZH 极大屏幕断点
   * @nameEN Extra Extra Large Screen Breakpoint
   * @desc 极大屏幕的断点尺寸
   * @descEN Breakpoint size for extra extra large screens
   */
  screenXXL: number;
  /**
   * @nameZH 极大屏幕最小断点
   * @nameEN Extra Extra Large Screen Min Breakpoint
   * @desc 极大屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for extra extra large screens
   */
  screenXXLMin: number;
  /**
   * @nameZH 极大屏幕最大断点
   * @nameEN Extra Extra Large Screen Max Breakpoint
   * @desc 极大屏幕的最大断点尺寸
   * @descEN Maximum breakpoint size for extra extra large screens
   */
  screenXXLMax: number;
  /**
   * @nameZH 超极大屏幕断点
   * @nameEN Extra Extra Extra Large Screen Breakpoint
   * @desc 超极大屏幕的断点尺寸
   * @descEN Breakpoint size for extra extra extra large screens
   */
  screenXXXL: number;
  /**
   * @nameZH 超极大屏幕最小断点
   * @nameEN Extra Extra Extra Large Screen Min Breakpoint
   * @desc 超极大屏幕的最小断点尺寸
   * @descEN Minimum breakpoint size for extra extra extra large screens
   */
  screenXXXLMin: number;

  /**
   * @nameZH 控件临时轮廓色
   * @nameEN Control Temporary Outline Color
   * @desc 用于 DefaultButton、Switch 等具有默认轮廓的控件
   * @descEN Used for DefaultButton, Switch which has default outline
   */
  controlTmpOutline: string;

  // FIXME: component box-shadow, should be removed
  /** @internal */
  boxShadowPopoverArrow: string;
  /** @internal */
  boxShadowCard: string;
  /** @internal */
  boxShadowDrawerRight: string;
  /** @internal */
  boxShadowDrawerLeft: string;
  /** @internal */
  boxShadowDrawerUp: string;
  /** @internal */
  boxShadowDrawerDown: string;
  /** @internal */
  boxShadowTabsOverflowLeft: string;
  /** @internal */
  boxShadowTabsOverflowRight: string;
  /** @internal */
  boxShadowTabsOverflowTop: string;
  /** @internal */
  boxShadowTabsOverflowBottom: string;
}
