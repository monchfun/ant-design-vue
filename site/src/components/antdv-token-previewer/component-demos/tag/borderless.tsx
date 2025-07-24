import { Tag, Space } from 'ant-design-vue';
import type { ComponentDemo } from '../../interface';

/**
 * 多种色彩的无边框Tag组件演示
 * @returns Tag组件的多种预设颜色展示
 */
const Demo = () => (
  <Space wrap>
    <Tag bordered={false} color="magenta">
      magenta
    </Tag>
    <Tag bordered={false} color="red">
      red
    </Tag>
    <Tag bordered={false} color="volcano">
      volcano
    </Tag>
    <Tag bordered={false} color="orange">
      orange
    </Tag>
    <Tag bordered={false} color="gold">
      gold
    </Tag>
    <Tag bordered={false} color="lime">
      lime
    </Tag>
    <Tag bordered={false} color="green">
      green
    </Tag>
    <Tag bordered={false} color="cyan">
      cyan
    </Tag>
    <Tag bordered={false} color="blue">
      blue
    </Tag>
    <Tag bordered={false} color="geekblue">
      geekblue
    </Tag>
    <Tag bordered={false} color="purple">
      purple
    </Tag>
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: [
    'magenta-1',
    'magenta-3',
    'magenta-6',
    'magenta-7',
    'red-1',
    'red-3',
    'red-6',
    'red-7',
    'volcano-1',
    'volcano-3',
    'volcano-6',
    'volcano-7',
    'orange-1',
    'orange-3',
    'orange-6',
    'orange-7',
    'gold-1',
    'gold-3',
    'gold-6',
    'gold-7',
    'lime-1',
    'lime-3',
    'lime-6',
    'lime-7',
    'green-1',
    'green-3',
    'green-6',
    'green-7',
    'cyan-1',
    'cyan-3',
    'cyan-6',
    'cyan-7',
    'blue-1',
    'blue-3',
    'blue-6',
    'blue-7',
    'geekblue-1',
    'geekblue-3',
    'geekblue-6',
    'geekblue-7',
    'purple-1',
    'purple-3',
    'purple-6',
    'purple-7',
  ],
  key: 'borderless',
};

export default componentDemo;
