export default {
  STRIPE_KEY: "pk_test_0ZFwRZ9Bo1E7IatKD8gNs1hZ",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-3"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://iydcdu87xk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_i9mGMJnV6",
    APP_CLIENT_ID: "1emo4k8p868jfckttf03ds0fos",
    IDENTITY_POOL_ID: "us-east-2:ffb31aa5-3854-43a3-88ef-1b7a1214dc67"
  }
};
