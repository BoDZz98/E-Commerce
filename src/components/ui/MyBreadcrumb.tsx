import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./MyBreadcrumb.module.css";
const MyBreadcrumb = ({
  title,
  subTitle,
}: {
  title: String;
  subTitle: String;
}) => {
  return (
    <div className={classes.cont}>
      <h1>{title}</h1>
      <Breadcrumb className="fs-4">
        <Breadcrumb.Item href="/">
          <Link to="/">Home </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{subTitle}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default MyBreadcrumb;
