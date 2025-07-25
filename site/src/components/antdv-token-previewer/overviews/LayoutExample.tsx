import { defineComponent } from 'vue';
import {
  Layout,
  Menu,
  Card,
  Statistic,
  Row,
  Col,
  Button,
  Avatar,
  Badge,
  theme,
  Calendar,
  Table,
  Tag,
  Divider,
  Select,
  Radio,
  Segmented,
  Input,
} from 'ant-design-vue';
import './LayoutExample.less';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SmileOutlined,
  DownOutlined,
  ExportOutlined,
  FilterOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';

const { Header, Sider, Content } = Layout;

/**
 * 响应式布局示例组件
 * 展示带有响应式侧边栏、导航菜单和内容区域的完整页面布局
 */
const LayoutExample = defineComponent({
  name: 'LayoutExample',
  setup() {
    const { token } = theme.useToken();
    const selectedKeys = ref<string[]>(['4']);
    const collapsed = ref<boolean>(true);
    const calendarMode = ref<'month' | 'year'>('year');
    const tableViewMode = ref<string>('all');
    const tableFilterStatus = ref<string>('all');

    /**
     * 切换侧边栏折叠状态
     */
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    const onCollapse = (collapsedState: boolean, type: string) => {
      collapsed.value = collapsedState;
      console.log('Collapsed:', collapsedState, 'Type:', type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log('Breakpoint triggered:', broken);
    };

    /**
     * 表格列配置
     */
    const tableColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: any, b: any) => a.age - b.age,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: '北京', value: '北京' },
          { text: '上海', value: '上海' },
          { text: '广州', value: '广州' },
          { text: '深圳', value: '深圳' },
          { text: '杭州', value: '杭州' },
        ],
        onFilter: (value: any, record: any) => record.address.includes(value),
        filterIcon: ({ filtered }: { filtered: boolean }) => (
          <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
      },
      {
        title: '操作',
        key: 'action',
      },
    ];

    /**
     * 表格数据
     */
    const tableData = [
      {
        key: '1',
        name: '张三',
        age: 32,
        address: '北京市朝阳区建国门外大街1号',
        tags: ['优秀', '开发者'],
      },
      {
        key: '2',
        name: '李四',
        age: 42,
        address: '上海市浦东新区陆家嘴环路1000号',
        tags: ['管理者'],
      },
      {
        key: '3',
        name: '王五',
        age: 32,
        address: '广州市天河区珠江新城花城大道5号',
        tags: ['设计师', '创意'],
      },
      {
        key: '4',
        name: '赵六',
        age: 28,
        address: '深圳市南山区科技园南区深南大道10000号',
        tags: ['前端', 'Vue'],
      },
      {
        key: '5',
        name: '钱七',
        age: 35,
        address: '杭州市西湖区文三路269号',
        tags: ['后端', 'Java'],
      },
    ];

    /**
     * 获取日历日期数据
     * @param value - 当前日期
     * @returns 返回当前日期的事项列表
     */
    const getListData = (value: any) => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }
      return listData || [];
    };

    /**
     * 获取月份数据
     * @param value - 当前月份
     * @returns 返回月份的待办数量
     */
    const getMonthData = (value: any) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    return () => (
      <div
        style={{
          height: 'calc(100vh - 64px)',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Layout style={{ height: '100%' }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed.value}
            defaultCollapsed={true}
            breakpoint="lg"
            collapsedWidth={80}
            onCollapse={onCollapse}
            onBreakpoint={onBreakpoint}
            style={{
              overflow: 'auto',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '32px',
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '16px',
                borderRadius: '4px',
              }}
            />
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys.value}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <span class="nav-text">用户管理</span>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <span class="nav-text">视频中心</span>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <span class="nav-text">上传文件</span>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                <span class="nav-text">数据统计</span>
              </Menu.Item>
              <Menu.Item key="5" icon={<CloudOutlined />}>
                <span class="nav-text">云服务</span>
              </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                <span class="nav-text">应用中心</span>
              </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                <span class="nav-text">团队管理</span>
              </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}>
                <span class="nav-text">商店</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                background: token.value.colorBgElevated,
                padding: '0 24px',
                boxShadow: '0 1px 4px rgba(0,21,41,.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  type="text"
                  icon={collapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={toggleCollapsed}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Badge count={5} size="small">
                  <Avatar
                    size="default"
                    style={{
                      backgroundColor: '#1890ff',
                      cursor: 'pointer',
                    }}
                  >
                    U
                  </Avatar>
                </Badge>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                overflow: 'auto',
                height: 'calc(100vh - 64px - 48px)',
              }}
            >
              <div style={{ width: '100%' }}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Card>
                      <Statistic
                        title="活跃用户"
                        value={11280}
                        precision={0}
                        valueStyle={{ color: token.value.colorSuccess }}
                        prefix={<ArrowUpOutlined />}
                        suffix="人"
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Card>
                      <Statistic
                        title="总收入"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: token.value.colorError }}
                        prefix={<ArrowDownOutlined />}
                        suffix="万元"
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Card>
                      <Statistic
                        title="转化率"
                        value={93.17}
                        precision={2}
                        valueStyle={{ color: token.value.colorSuccess }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>

              {/* 通知事项日历组件 */}
              <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
                <Col span={24}>
                  <Card>
                    <Calendar mode={calendarMode.value}>
                      {{
                        headerRender: ({ value, type, onChange, onTypeChange }: any) => {
                          const start = 0;
                          const end = 12;
                          const monthOptions = [];

                          const current = value.clone();
                          const localeData = value.localeData();
                          const months = [];
                          for (let i = 0; i < 12; i++) {
                            current.month(i);
                            months.push(localeData.monthsShort(current));
                          }

                          for (let index = start; index < end; index++) {
                            monthOptions.push(
                              <Select.Option key={`${index}`}>{months[index]}</Select.Option>,
                            );
                          }

                          const month = value.month();
                          const year = value.year();
                          const options = [];
                          for (let i = year - 10; i < year + 10; i += 1) {
                            options.push(
                              <Select.Option key={i} value={i}>
                                {i}
                              </Select.Option>,
                            );
                          }

                          return (
                            <div
                              style={{
                                padding: '8px 0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                通知事项日历
                              </div>
                              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Radio.Group
                                  size="small"
                                  value={type}
                                  onChange={e => {
                                    const newType = e.target.value;
                                    calendarMode.value = newType;
                                    onTypeChange(newType);
                                  }}
                                >
                                  <Radio.Button value="month">月</Radio.Button>
                                  <Radio.Button value="year">年</Radio.Button>
                                </Radio.Group>
                                {type === 'month' && (
                                  <Select
                                    size="small"
                                    value={String(month)}
                                    onChange={selectedMonth => {
                                      const newValue = value.clone();
                                      newValue.month(parseInt(selectedMonth as string, 10));
                                      onChange(newValue);
                                    }}
                                  >
                                    {monthOptions}
                                  </Select>
                                )}
                                <Select
                                  size="small"
                                  value={year}
                                  onChange={newYear => {
                                    const now = value.clone().year(newYear);
                                    onChange(now);
                                  }}
                                >
                                  {options}
                                </Select>
                              </div>
                            </div>
                          );
                        },
                        dateCellRender: ({ current }: { current: any }) => (
                          <ul class="events">
                            {getListData(current).map((item: any) => (
                              <li key={item.content}>
                                <Badge status={item.type} text={item.content} />
                              </li>
                            ))}
                          </ul>
                        ),
                        monthCellRender: ({ current }: { current: any }) => {
                          const monthData = getMonthData(current);
                          return monthData ? (
                            <div class="notes-month">
                              <section>{monthData}</section>
                              <span>Backlog number</span>
                            </div>
                          ) : null;
                        },
                      }}
                    </Calendar>
                  </Card>
                </Col>
              </Row>

              {/* 数据表格组件 */}
              <Card
                style={{ marginTop: '24px' }}
                title={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>数据管理</span>
                    <Segmented
                      value={tableViewMode.value}
                      onChange={value => {
                        tableViewMode.value = value as string;
                        console.log('表格视图模式:', value);
                      }}
                      options={[
                        { label: '全部', value: 'all' },
                        { label: '开发者', value: 'developer' },
                        { label: '管理者', value: 'manager' },
                        { label: '设计师', value: 'designer' },
                      ]}
                    />
                  </div>
                }
              >
                {/* 搜索和控制栏 */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Input.Search
                      placeholder="搜索用户"
                      allowClear
                      style={{ width: '200px' }}
                      onSearch={value => {
                        console.log('搜索:', value);
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Select
                      value={tableFilterStatus.value}
                      onChange={value => {
                        tableFilterStatus.value = value as string;
                        console.log('表格筛选状态:', value);
                      }}
                      style={{ width: '120px' }}
                      options={[
                        { label: '全部状态', value: 'all' },
                        { label: '活跃', value: 'active' },
                        { label: '待审核', value: 'pending' },
                        { label: '已禁用', value: 'disabled' },
                      ]}
                    />
                    <Button
                      type="primary"
                      icon={<ExportOutlined />}
                      onClick={() => {
                        console.log('导出数据');
                      }}
                    >
                      导出数据
                    </Button>
                  </div>
                </div>
                <Table columns={tableColumns} dataSource={tableData} pagination={{ pageSize: 5 }}>
                  {{
                    headerCell: ({ column }: { column: any }) => {
                      if (column.key === 'name') {
                        return <span>姓名</span>;
                      }
                    },
                    bodyCell: ({ column, record }: { column: any; record: any }) => {
                      if (column.key === 'name') {
                        return <a style={{ color: token.value.colorPrimary }}>{record.name}</a>;
                      } else if (column.key === 'tags') {
                        return (
                          <span>
                            {record.tags.map((tag: string) => (
                              <Tag
                                key={tag}
                                color={
                                  tag === '管理者'
                                    ? 'volcano'
                                    : tag.length > 3
                                      ? 'geekblue'
                                      : 'green'
                                }
                              >
                                {tag.toUpperCase()}
                              </Tag>
                            ))}
                          </span>
                        );
                      } else if (column.key === 'action') {
                        return (
                          <span>
                            <a style={{ color: token.value.colorPrimary }}>编辑</a>
                            <Divider type="vertical" />
                            <a style={{ color: token.value.colorError }}>删除</a>
                          </span>
                        );
                      }
                    },
                  }}
                </Table>
              </Card>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  },
});

export default LayoutExample;
