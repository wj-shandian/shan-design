import { Button } from "../../lib";
import "./index.scss";

export default function ButtonComponent() {
  return (
    <div className="button_flex">
      <h1>Button 按钮</h1>
      <div className="shan-doc-card">
        <h3>介绍</h3>
        <div>按钮是用来触发一个操作的 例如提交数据 打开弹窗等等</div>
      </div>
      <div className="shan-doc-card">
        <h3>引入</h3>
        <div>暂时先空置 后续添加</div>
      </div>
      <h1>代码示例</h1>
      <div className="shan-doc-card">
        <h3>按钮类型</h3>
        <div>
          <Button style={{ marginRight: "20px", marginBottom: "20px" }}>
            default
          </Button>
          <Button
            type="primary"
            style={{ marginRight: "20px", marginBottom: "20px" }}
          >
            primary
          </Button>
          <Button
            type="dashed"
            style={{ marginRight: "20px", marginBottom: "20px" }}
          >
            dashed
          </Button>
          <Button
            type="text"
            style={{ marginRight: "20px", marginBottom: "20px" }}
          >
            text
          </Button>
          <Button
            type="link"
            style={{ marginRight: "20px", marginBottom: "20px" }}
          >
            link
          </Button>
        </div>
        <div>
          <h3>代码示例</h3>
          <div>
            <pre>
              <code className="code-html">{`<Button>default</Button>
<Button type="primary">primary</Button>
<Button type="dashed">dashed</Button>
<Button type="text">text</Button>
<Button type="link">link</Button>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
