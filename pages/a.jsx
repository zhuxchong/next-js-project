import { withRouter } from "next/router";

const A = props => {
  const { router } = props;
  return <div>{router.query.id}</div>;
};
export default withRouter(A);
