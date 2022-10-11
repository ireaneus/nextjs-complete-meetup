# nextjs-complete-meetup

## NextJS setup

## \_app.js

```js
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## Top Level index.js

- this is react version of reading backend data
- html code will not show DUMMY_MEETUPS but rather an empty array (useState initial state)
- useEffect first time loading page will eventually load the data and display on page

```js
function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request to fetch some data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nextjs-kxw5ie)
