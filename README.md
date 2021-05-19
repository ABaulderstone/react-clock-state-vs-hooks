# Clock app challenge

This is a challenge for the lesson on React class components and state management. 

## Challenge - error handling

One common way to use state is for error handling - to pass an error received in a parent component to the child component responsible for displaying content.

In our clock app, if we get an error getting the geolocation, we won't be able to show the season, but our user may expect to see the season. We can pass on the error message in our clock display to let the user know what has happened. We could even prompt them to check the location settings.

In this challenge, add an attribute called `errorMessage` to the state.

1. Set `errorMessage` as an empty string initially, but if an error occurs update it with a meaningful error message.
2. Pass `errorMessage` as a prop to Clock
3. If `errorMessage` is received, indicate in some way in the display that the error has occurred and suggest how the user may fix it.

**Testing your solution**

In order to cause an error to make sure your solution works, you can:

- click on the location icon in Chrome
- click on 'Clear these settings for future visits'
- refresh, and when prompted, block Chrome from knowing your location

![block location in chrome](https://media.giphy.com/media/QXJXUvI2CBIBZGXrQD/giphy.gif)

To re-enable location, repeat the same steps, but when prompted, allow Chrome to know your location.

There is an example solution in the **challenge-complete** branch if you get really stuck, but first give it a good try, and look back at the lesson if you need guidance!