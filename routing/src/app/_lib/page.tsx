export default function PrivateRoute() {
  return (
    <h1>You can not view this in the browser.</h1>
  );
}

// !!! Using _NAME for the folder's name, the route is private and not visible in the browser. Using %5F (URL-encoded form of _) instead makes it visible.