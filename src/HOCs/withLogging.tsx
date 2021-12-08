const withLogging =
  (Component: () => JSX.Element) =>
  ({ ...props }) => {
    console.log(Component.name);
    return <Component {...props} />;
  };

export default withLogging;
