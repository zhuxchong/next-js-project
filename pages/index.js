import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";
export default () => {
  return (
    <div>
      <Link href="/a?id=1" as="/a/1">
        <Button>123</Button>
      </Link>
      <Button
        onClick={() => {
          //Router.push("/a?id=2");
          Router.push(
            {
              pathname: "/a",
              query: {
                id: 2
              }
            },
            "/a/2"
          );
        }}
      >
        go a{" "}
      </Button>
    </div>
  );
};
