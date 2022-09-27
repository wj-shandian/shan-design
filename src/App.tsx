import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import javascript from "highlight.js/lib/languages/javascript";
import Home from "./component/home";
import Layout from "./component/layout";
import Button from "./component/button";
hljs.registerLanguage("javascript", javascript);

function App() {
  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll(".code-html");
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/button" element={<Button />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
