import { withRouter } from "next/router";

const A = (props) => {
  const { router, name } = props;

  return <div>{router.query.id + name}"++caohaha</div>;
};

A.getInitialProps = async () => {
  const pro = new Promise((resv) => {
    resv({
      name: "luke",
    });
  });
  return await pro;
};
export default withRouter(A);
