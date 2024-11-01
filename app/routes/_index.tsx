
import { Links, useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";

export function links() {
  return [
    { rel: "stylesheet", href: "https://cdn.bootcss.com/bootstrap/3.3.4/css/bootstrap.min.css" },
    { rel: "script", href: "https://cdn.bootcss.com/jquery/1.11.2/jquery.min.js" },
    { rel: "script", href: "https://cdn.bootcss.com/bootstrap/3.3.4/js/bootstrap.min.js" },
  ];
}

export default function Index() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("passcode") === "114514") {
      navigate("/dashboard")
    }
  }, [searchParams, navigate])

  return <div className="container font-['Helvetica Neue,Helvetica,Arial,sans-serif']" style={{ "marginTop": "9%" }}>
    <Links />
    <div className="jumbotron">
      <div className="panel panel-success">
        <div className="panel-heading"><h1>恭喜, 站点创建成功！</h1></div>
      </div>
      <p><h3>站点创建成功，本页面由系统自动生成。</h3></p>
      <p><li className="!text-[14px] !font-normal">本页面在FTP根目录下的index.html</li></p>
      <p><li className="!text-[14px] !font-normal">您可以删除或覆盖本页面</li></p>
      <p><li className="!text-[14px] !font-normal">FTP相关信息，请到宝塔后台查看</li></p>
      <p><li className="!text-[14px] !font-normal">我们为您提供了完善的数据备份功能，请到后台进行相关设置</li></p>
    </div>
  </div>
}
