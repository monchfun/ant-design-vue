import { defineComponent } from 'vue';
import { Progress, Space } from 'ant-design-vue';
import type { ComponentDemo } from '../../interface';

/**
 * 分段式进度条演示组件
 * 展示带有成功段的进度条样式
 */
const Demo = defineComponent({
  setup() {
    return () => (
      <Space direction="vertical" size="middle">
        <Progress percent={60} success={{ percent: 30 }} />
        <Progress percent={60} success={{ percent: 30 }} type="circle" size="small" />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
      </Space>
    );
  },
});

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorFillSecondary', 'colorText', 'colorBgContainer'],
  key: 'segment',
};

export default componentDemo;
