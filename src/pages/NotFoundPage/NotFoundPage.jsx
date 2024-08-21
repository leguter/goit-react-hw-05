import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
          <h1>This link does not exist</h1>
          <Link to='/'>Go to Home page</Link>
    </div>
  );
}

export default NotFoundPage