import Link from "next/link";
import { Button } from "antd";
import Router from "next/router";
export default (props) => {
  const { children } = props;

  return (
    <>
      <div>
        Here is Layout{" "}
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
                  id: 2,
                },
              },
              "/a/2"
            );
          }}
        >
          go a{" "}
        </Button>
      </div>
      {children}
    </>
  );
};
