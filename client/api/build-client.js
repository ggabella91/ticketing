import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // requests should be made to
    // http://ingress-nginx-controller.ingress-nginx.svc...

    return axios.create({
      baseURL:
        'http://www.ticketing-app-prod-ggabella.xyz/',
      headers: req.headers,
    });
  } else {
    // We are on the browser!
    // Requests can be made with a base URL of '/'
    return axios.create({
      baseURL: '/',
    });
  }
};
