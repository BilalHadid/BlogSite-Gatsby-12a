module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u5276rx0oz7m`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "eprltz5GO3hNPXY_N9S8FMGT6B3cAUeGCxlO91Zz_M8",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAvZ5MdJMVkqW8TdRjD0oj41vjWETTqaEE",
          authDomain: "blogauth-9f72b.firebaseapp.com",
          projectId: "blogauth-9f72b",
          storageBucket: "blogauth-9f72b.appspot.com",
          messagingSenderId: "979921097291",
          appId: "1:979921097291:web:9e94c2d462f0029bb1f3ce",
          measurementId: "G-EXN7V6V0VF",
        },
      },
    },
  ],
};
