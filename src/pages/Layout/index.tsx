import { Button } from "antd";
import { request } from "@utils/request";

const Layout = () => {
  const handleEvent = () => {
    // request.get("/member").then(({ data }) => console.log(data));
    request
      .post("/login", { username: "admin", password: "admin" })
      .then(({ data }) => console.log(data));
  };
  return (
    <div>
      <Button type="primary" onClick={() => handleEvent()}>
        Primary Button
      </Button>
      Layout
    </div>
  );
};

export default Layout;
