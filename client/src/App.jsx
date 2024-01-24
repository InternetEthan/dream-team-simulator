import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { addUser } from './redux/actions';

// seedUsers.forEach((user) => {
//   store.dispatch(addUser(user));
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Outlet />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
