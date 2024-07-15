import axios from 'axios'

export const apiClient = axios.create(
    {
        //baseURL: 'http://localhost:5000' //#CHANGE
        baseURL: 'http://03-rest-api-full-stack-h2-env.eba-z3ve7rnq.ap-south-1.elasticbeanstalk.com/'
    }
);

/* For Best Practices https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables*/
