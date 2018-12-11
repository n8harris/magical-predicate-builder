const BUILD_CONTENT_ENDPOINT = "http://localhost:8081/content";
const BUILD_QUERY_ENDPOINT = "http://localhost:8081/query";
const BUILD_CONTENT_ENDPOINT_CLOUD = "https://us-central1-ethereal-anvil-225013.cloudfunctions.net/content";
const BUILD_QUERY_ENDPOINT_CLOUD = "https://us-central1-ethereal-anvil-225013.cloudfunctions.net/query";
let constants = {
  BUILD_CONTENT_ENDPOINT,
  BUILD_QUERY_ENDPOINT,
};

if (process.env.REACT_APP_CLOUD) {
  constants = {
    BUILD_CONTENT_ENDPOINT: BUILD_CONTENT_ENDPOINT_CLOUD,
    BUILD_QUERY_ENDPOINT: BUILD_QUERY_ENDPOINT_CLOUD,
  };
}



export default constants;
