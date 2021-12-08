import "./index.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PostPage from "scenes/PostPage";
import PostFeed from "scenes/PostFeed";
import { PostsContextProvider } from "contexts/PostsContext";

const propsMessage = "Hello from ";

const App = () => {
  console.log(propsMessage + "App");
  return (
    <>
      <PostsContextProvider propsMessage={propsMessage}>
        <BrowserRouter>
          <Switch>
            <Route path="/posts">
              <PostFeed propsMessage={propsMessage} />
            </Route>
            <Route path="/post/:postId">
              <PostPage propsMessage={propsMessage} />
            </Route>

            <Route path="/">
              <Redirect to="/posts" />
            </Route>
          </Switch>
        </BrowserRouter>
      </PostsContextProvider>
    </>
  );
};

export default App;
