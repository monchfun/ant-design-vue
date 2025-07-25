export interface ColorNeutralMapToken {
  /**
   * @internal
   */
  colorTextBase: string;

  /**
   * @internal
   */
  colorBgBase: string;

  // ----------   Text   ---------- //

  /**
   * @nameZH 一级文本色
   * @nameEN Primary Text Color
   * @desc 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。
   * @descEN The darkest text color. To comply with W3C standards, the default text color uses this color, and this color is also the darkest neutral color.
   */
  colorText: string;

  /**
   * @nameZH 二级文本色
   * @nameEN Secondary Text Color
   * @desc 作为第二梯度的文本色，一般用在不那么需要强化文本颜色的场景，例如 Label 文本、Menu 的文本选中态等场景。
   * @descEN As the second gradient text color, it is generally used in scenarios where text color does not need to be emphasized, such as Label text, Menu text selected state, etc.
   */
  colorTextSecondary: string;

  /**
   * @nameZH 三级文本色
   * @nameEN Tertiary Text Color
   * @desc 第三级文本色一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景。
   * @descEN The third level text color is generally used for descriptive text, such as supplementary text in forms, descriptive text in lists, etc.
   */
  colorTextTertiary: string;

  /**
   * @nameZH 四级文本色
   * @nameEN Quaternary Text Color
   * @desc 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。
   * @descEN The fourth level text color is the lightest text color, such as form input prompt text, disabled text, etc.
   */
  colorTextQuaternary: string;

  // ----------   Border   ---------- //

  /**
   * @nameZH 一级边框色
   * @nameEN Default Border Color
   * @desc 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。
   * @descEN Default border color, used to separate different elements, such as: form separator, card separator, etc.
   */
  colorBorder: string;

  /**
   * @nameZH 二级边框色
   * @nameEN Secondary Border Color
   * @desc 比默认使用的边框色要浅一级，此颜色和 colorSplit 的颜色一致。使用的是实色。
   * @descEN Slightly lighter than the default border color, this color is the same as `colorSplit`. Solid color is used.
   */
  colorBorderSecondary: string;

  // ----------   Fill   ---------- //

  /**
   * @nameZH 一级填充色
   * @nameEN Primary Fill Color
   * @desc 最深的填充色，用于拉开与二、三级填充色的区分度，目前只用在 Slider 的 hover 效果。
   * @descEN The darkest fill color is used to distinguish between the second and third level of fill color, and is currently only used in the hover effect of Slider.
   */
  colorFill: string;

  /**
   * @nameZH 二级填充色
   * @nameEN Secondary Fill Color
   * @desc 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。
   * @descEN The second level of fill color can outline the shape of the element more clearly, such as Rate, Skeleton, etc. It can also be used as the Hover state of the third level of fill color, such as Table, etc.
   */
  colorFillSecondary: string;

  /**
   * @nameZH 三级填充色
   * @nameEN Tertiary Fill Color
   * @desc 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。
   * @descEN The third level of fill color is used to outline the shape of the element, such as Slider, Segmented, etc. If there is no emphasis requirement, it is recommended to use the third level of fill color as the default fill color.
   */
  colorFillTertiary: string;

  /**
   * @nameZH 四级填充色
   * @nameEN Quaternary Fill Color
   * @desc 最弱一级的填充色，适用于不易引起注意的色块，例如斑马纹、区分边界的色块等。
   * @descEN The weakest level of fill color is suitable for color blocks that are not easy to attract attention, such as zebra stripes, color blocks that distinguish boundaries, etc.
   */
  colorFillQuaternary: string;

  // ----------   Surface   ---------- //

  /**
   * @nameZH 布局背景色
   * @nameEN Layout Background Color
   * @desc 该色用于页面整体布局的背景色，只有需要在页面中处于 B1 的视觉层级时才会使用该 token，其他用法都是错误的
   * @descEN This color is used for the background color of the overall layout of the page. This token should only be used when it needs to be at the B1 visual level in the page, and other uses are incorrect.
   */
  colorBgLayout: string;

  /**
   * @nameZH 组件容器背景色
   * @nameEN Component Container Background Color
   * @desc 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。
   * @descEN The container background color of components, such as default buttons, input boxes, etc. Do not confuse it with `colorBgElevated`.
   */
  colorBgContainer: string;

  /**
   * @nameZH 浮层容器背景色
   * @nameEN Elevated Container Background Color
   * @desc 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。
   * @descEN Floating layer container background color. In dark mode, the color value of this token will be brighter than `colorBgContainer`. For example: modal boxes, pop-up boxes, menus, etc.
   */
  colorBgElevated: string;

  /**
   * @nameZH 引起注意的背景色
   * @nameEN Spotlight Background Color
   * @desc 该色用于引起用户强烈关注注意的背景色，目前只用在 Tooltip 的背景色上。
   * @descEN This color is used for background colors that attract strong user attention, and is currently only used on the background color of Tooltip.
   */
  colorBgSpotlight: string;
}

/**
 * 品牌色梯度变量
 */
interface ColorPrimaryMapToken {
  /**
   * @nameZH 品牌主色
   * @nameEN Primary Color
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一，用于产品的主色调、主按钮、主图标、主文本等
   * @descEN Brand color is one of the most intuitive visual elements that reflect product characteristics and communication concepts, used for product main color, main buttons, main icons, main text, etc.
   */
  colorPrimary: string; // 6

  /**
   * @nameZH 主色浅色背景色
   * @nameEN Light Background Color of Primary Color
   * @desc 主色浅色背景颜色，一般用于视觉层级较弱的选中状态。
   * @descEN Light background color of primary color, usually used for weak visual level selection state.
   */
  colorPrimaryBg: string; // 1

  /**
   * @nameZH 主色浅色背景悬浮态
   * @nameEN Primary Light Background Hover Color
   * @desc 与主色浅色背景颜色相对应的悬浮态颜色。
   * @descEN The hover color corresponding to the primary light background color.
   */
  colorPrimaryBgHover: string; // 2

  /**
   * @nameZH 主色描边色
   * @nameEN Primary Border Color
   * @desc 主色梯度下的描边用色，用在 Slider 组件的描边上
   * @descEN Border color under primary color gradient, used on the border of Slider components
   */
  colorPrimaryBorder: string; // 3

  /**
   * @nameZH 主色描边色悬浮态
   * @nameEN Primary Border Hover Color
   * @desc 主色梯度下的描边用色的悬浮态，Slider 、Button 等组件的描边 Hover 时会使用
   * @descEN Hover state of border color under primary color gradient, used when hovering over borders of components like Slider and Button
   */
  colorPrimaryBorderHover: string; // 4

  /**
   * @nameZH 主色悬浮态
   * @nameEN Primary Hover Color
   * @desc 主色梯度下的悬浮态，使用频率很高
   * @descEN Hover state under primary color gradient, used very frequently
   */
  colorPrimaryHover: string; // 5

  /**
   * @nameZH 主色激活态
   * @nameEN Primary Active Color
   * @desc 主色梯度下的深色激活态
   * @descEN Dark active state under primary color gradient
   */
  colorPrimaryActive: string; // 7

  /**
   * @nameZH 主色文本悬浮态
   * @nameEN Primary Text Hover Color
   * @desc 主色梯度下的文本悬浮态
   * @descEN Text hover state under primary color gradient
   */
  colorPrimaryTextHover: string; // 8

  /**
   * @nameZH 主色文本
   * @nameEN Primary Text Color
   * @desc 主色梯度下的文本颜色
   * @descEN Text color under primary color gradient
   */
  colorPrimaryText: string; // 9

  /**
   * @nameZH 主色文本
   * @nameEN Primary Text Active Color
   * @desc 主色梯度下的文本激活态
   * @descEN Text active state under primary color gradient
   */
  colorPrimaryTextActive: string; // 10
}

interface ColorSuccessMapToken {
  /**
   * @nameZH 成功色的浅色背景颜色
   * @nameEN Light Background Color of Success Color
   * @desc 成功色的浅色背景颜色，用于 Tag 和 Alert 的成功态背景色
   * @descEN Light background color of success color, used for Tag and Alert success state background color
   */
  colorSuccessBg: string; // 1

  /**
   * @nameZH 成功色的浅色背景色悬浮态
   * @nameEN Hover State Color of Light Success Background
   * @desc 成功色浅色背景颜色，一般用于视觉层级较弱的选中状态，不过 antd 目前没有使用到该 token
   * @descEN Light background color of success color, but antd does not use this token currently
   */
  colorSuccessBgHover: string; // 2

  /**
   * @nameZH 成功色的描边色
   * @nameEN Border Color of Success Color
   * @desc 成功色的描边色，用于 Tag 和 Alert 的成功态描边色
   * @descEN Border color of success color, used for Tag and Alert success state border color
   */
  colorSuccessBorder: string; // 3

  /**
   * @nameZH 成功色的描边色悬浮态
   * @nameEN Hover State of Success Border Color
   * @desc 成功色的描边色悬浮态
   * @descEN Hover state of success border color
   */
  colorSuccessBorderHover: string; // 4

  /**
   * @nameZH 成功色的深色悬浮态
   * @nameEN Hover State of Success Color
   * @desc 成功色的深色悬浮态
   * @descEN Hover state of success color
   */
  colorSuccessHover: string; // 5

  /**
   * @nameZH 成功色
   * @nameEN Success Color
   * @desc 默认的成功色，如 Result、Progress 等组件中都有使用该颜色
   * @descEN Default success color, used in components like Result, Progress, etc.
   */
  colorSuccess: string; // 6

  /**
   * @nameZH 成功色的深色激活态
   * @nameEN Active State of Success Color
   * @desc 成功色的深色激活态
   * @descEN Active state of success color
   */
  colorSuccessActive: string; // 7

  /**
   * @nameZH 成功色的文本悬浮态
   * @nameEN Hover State of Success Text Color
   * @desc 成功色的文本悬浮态
   * @descEN Hover state of success text color
   */
  colorSuccessTextHover: string; // 8

  /**
   * @nameZH 成功色的文本默认态
   * @nameEN Default Success Text Color
   * @desc 成功色的文本默认态
   * @descEN Default success text color
   */
  colorSuccessText: string; // 9

  /**
   * @nameZH 成功色的文本激活态
   * @nameEN Active State of Success Text Color
   * @desc 成功色的文本激活态
   * @descEN Active state of success text color
   */
  colorSuccessTextActive: string; // 10
}

interface ColorWarningMapToken {
  /**
   * @nameZH 警戒色的浅色背景颜色
   * @nameEN Light Background Color of Warning Color
   * @desc 警戒色的浅色背景颜色，用于 Tag 和 Alert 的警告态背景色
   * @descEN Light background color of warning color, used for Tag and Alert warning state background color
   */
  colorWarningBg: string; // 1

  /**
   * @nameZH 警戒色的浅色背景色悬浮态
   * @nameEN Hover State Color of Light Warning Background
   * @desc 警戒色的浅色背景色悬浮态
   * @descEN Hover state of light background color of warning color
   */
  colorWarningBgHover: string; // 2

  /**
   * @nameZH 警戒色的描边色
   * @nameEN Border Color of Warning Color
   * @desc 警戒色的描边色
   * @descEN Border color of warning color
   */
  colorWarningBorder: string; // 3

  /**
   * @nameZH 警戒色的描边色悬浮态
   * @nameEN Hover State of Warning Border Color
   * @desc 警戒色的描边色悬浮态
   * @descEN Hover state of warning border color
   */
  colorWarningBorderHover: string; // 4

  /**
   * @nameZH 警戒色的深色悬浮态
   * @nameEN Hover State of Warning Color
   * @desc 警戒色的深色悬浮态
   * @descEN Hover state of warning color
   */
  colorWarningHover: string; // 5

  /**
   * @nameZH 警戒色
   * @nameEN Warning Color
   * @desc 最常用的警戒色，例如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该颜色
   * @descEN The most commonly used warning color, used in warning components like Notification, Alert, or input components
   */
  colorWarning: string; // 6

  /**
   * @nameZH 警戒色的深色激活态
   * @nameEN Active State of Warning Color
   * @desc 警戒色的深色激活态
   * @descEN Active state of warning color
   */
  colorWarningActive: string; // 7

  /**
   * @nameZH 警戒色的文本悬浮态
   * @nameEN Hover State of Warning Text Color
   * @desc 警戒色的文本悬浮态
   * @descEN Hover state of warning text color
   */
  colorWarningTextHover: string; // 8

  /**
   * @nameZH 警戒色的文本默认态
   * @nameEN Default Warning Text Color
   * @desc 警戒色的文本默认态
   * @descEN Default warning text color
   */
  colorWarningText: string; // 9

  /**
   * @nameZH 警戒色的文本激活态
   * @nameEN Active State of Warning Text Color
   * @desc 警戒色的文本激活态
   * @descEN Active state of warning text color
   */
  colorWarningTextActive: string; // 10
}

interface ColorInfoMapToken {
  /**
   * @nameZH 信息色的浅色背景颜色
   * @nameEN Light Background Color of Info Color
   * @desc 信息色的浅色背景颜色，用于 Tag 和 Alert 的信息态背景色
   * @descEN Light background color of info color, used for Tag and Alert info state background color
   */
  colorInfoBg: string; // 1

  /**
   * @nameZH 信息色的浅色背景色悬浮态
   * @nameEN Hover State Color of Light Info Background
   * @desc 信息色的浅色背景色悬浮态
   * @descEN Hover state of light background color of info color
   */
  colorInfoBgHover: string; // 2

  /**
   * @nameZH 信息色的描边色
   * @nameEN Border Color of Info Color
   * @desc 信息色的描边色
   * @descEN Border color of info color
   */
  colorInfoBorder: string; // 3

  /**
   * @nameZH 信息色的描边色悬浮态
   * @nameEN Hover State of Info Border Color
   * @desc 信息色的描边色悬浮态
   * @descEN Hover state of info border color
   */
  colorInfoBorderHover: string; // 4

  /**
   * @nameZH 信息色的深色悬浮态
   * @nameEN Hover State of Info Color
   * @desc 信息色的深色悬浮态
   * @descEN Hover state of info color
   */
  colorInfoHover: string; // 5

  /**
   * @nameZH 信息色
   * @nameEN Info Color
   * @desc 最常用的信息色，例如 Notification、 Alert等信息类组件或 Input 输入类等组件会使用该颜色
   * @descEN The most commonly used info color, used in info components like Notification, Alert, or input components
   */
  colorInfo: string; // 6

  /**
   * @nameZH 信息色的深色激活态
   * @nameEN Active State of Info Color
   * @desc 信息色的深色激活态
   * @descEN Active state of info color
   */
  colorInfoActive: string; // 7

  /**
   * @nameZH 信息色的文本悬浮态
   * @nameEN Hover State of Info Text Color
   * @desc 信息色的文本悬浮态
   * @descEN Hover state of info text color
   */
  colorInfoTextHover: string; // 8

  /**
   * @nameZH 信息色的文本默认态
   * @nameEN Default Info Text Color
   * @desc 信息色的文本默认态
   * @descEN Default info text color
   */
  colorInfoText: string; // 9

  /**
   * @nameZH 信息色的文本激活态
   * @nameEN Active State of Info Text Color
   * @desc 信息色的文本激活态
   * @descEN Active state of info text color
   */
  colorInfoTextActive: string; // 10
}

interface ColorErrorMapToken {
  /**
   * @nameZH 错误色的浅色背景颜色
   * @nameEN Light Background Color of Error Color
   * @desc 错误色的浅色背景颜色，用于 Tag 和 Alert 的错误态背景色
   * @descEN Light background color of error color, used for Tag and Alert error state background color
   */
  colorErrorBg: string; // 1

  /**
   * @nameZH 错误色的浅色背景色悬浮态
   * @nameEN Hover State Color of Light Error Background
   * @desc 错误色浅色背景颜色的悬浮态
   * @descEN Hover state of light background color of error color
   */
  colorErrorBgHover: string; // 2

  /**
   * @nameZH 错误色的描边色
   * @nameEN Border Color of Error Color
   * @desc 错误色的描边色，用于 Tag 和 Alert 的错误态描边色
   * @descEN Border color of error color, used for Tag and Alert error state border color
   */
  colorErrorBorder: string; // 3

  /**
   * @nameZH 错误色的描边色悬浮态
   * @nameEN Hover State of Error Border Color
   * @desc 错误色的描边色悬浮态
   * @descEN Hover state of error border color
   */
  colorErrorBorderHover: string; // 4

  /**
   * @nameZH 错误色的深色悬浮态
   * @nameEN Hover State of Error Color
   * @desc 错误色的深色悬浮态
   * @descEN Hover state of error color
   */
  colorErrorHover: string; // 5

  /**
   * @nameZH 错误色
   * @nameEN Error Color
   * @desc 默认的错误色，如 Result、Progress 等组件中都有使用该颜色
   * @descEN Default error color, used in components like Result, Progress, etc.
   */
  colorError: string; // 6

  /**
   * @nameZH 错误色的深色激活态
   * @nameEN Active State of Error Color
   * @desc 错误色的激活态，用于错误状态下的交互反馈
   * @descEN The active state of the error color, used for interactive feedback in error states
   */
  colorErrorActive: string; // 7

  /**
   * @nameZH 错误色的文本悬浮态
   * @nameEN Hover State of Error Text Color
   * @desc 错误色的文本悬浮态
   * @descEN Hover state of error text color
   */
  colorErrorTextHover: string; // 8

  /**
   * @nameZH 错误色的文本默认态
   * @nameEN Default Error Text Color
   * @desc 错误色的文本默认态
   * @descEN Default error text color
   */
  colorErrorText: string; // 9

  /**
   * @nameZH 错误色的文本激活态
   * @nameEN Active State of Error Text Color
   * @desc 错误色的文本激活态
   * @descEN Active state of error text color
   */
  colorErrorTextActive: string; // 10
}

export interface ColorMapToken
  extends ColorNeutralMapToken,
    ColorPrimaryMapToken,
    ColorSuccessMapToken,
    ColorWarningMapToken,
    ColorErrorMapToken,
    ColorInfoMapToken {
  /**
   * @nameZH 纯白色
   * @nameEN Pure White
   * @desc 不随主题变化的纯白色
   * @descEN Pure white color don't changed by theme
   * @default #FFFFFF
   */
  colorWhite: string;

  /**
   * @nameZH 浮层的背景蒙层颜色
   * @nameEN Background color of the mask
   * @desc 浮层的背景蒙层颜色，用于遮罩浮层下面的内容，Modal、Drawer 等组件的蒙层使用的是该 token
   * @descEN The background color of the mask, used to cover the content below the mask, Modal, Drawer and other components use this token
   */
  colorBgMask: string;

  /**
   * @nameZH 纯黑色
   * @desc 不随主题变化的纯黑色
   * @default #0000
   */
  // colorBlack: string;
}
