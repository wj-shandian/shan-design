import { Link, useLocation } from "react-router-dom";
import "./index.scss";
export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname, "pathname");
  const data = [
    {
      title: "开发指南",
      link: [
        {
          path: "/1",
          name: "常见问题",
        },
        {
          path: "/2",
          name: "更新日志",
        },
        {
          path: "/3",
          name: "贡献指南",
        },
      ],
    },
    {
      title: "基础组件",
      link: [
        {
          path: "/button",
          name: "Button 按钮",
        },
      ],
    },
    {
      title: "展示组件",
      link: [
        {
          path: "/4",
          name: "导航栏目",
        },
      ],
    },
  ];
  return (
    <div className="sidebar-content-flex">
      {data?.map((item, index) => {
        return (
          <div>
            <div key={index} className="sidebar-title-style">
              {item?.title}
            </div>
            {item?.link?.map((e) => (
              <div
                key={e?.path}
                className={`${
                  e?.path === pathname ? "sidebar-link-active" : ""
                } sidebar-link-style `}
              >
                <Link to={e?.path} className="sidebar-link-style">
                  {e?.name}
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
