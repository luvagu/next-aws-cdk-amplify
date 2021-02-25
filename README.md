# Next.js AWS CDK Amplify

Full stack cloud multi-user blogging app with Next.js, AWS CDK, AWS AppSync, & AWS Amplify

# Environment & prerequisites

Before we begin, make sure you have the following:

- Node.js v10.3.0 or later installed
- A valid and confirmed AWS account
- You must provide IAM credentials and an AWS Region to use AWS CDK, if you have not already done so. If you have the AWS CLI installed, the easiest way to satisfy this requirement is to install the AWS CLI and issue the following command:

```sh
$ aws configure
```

> When configuring the IAM user, be sure to give them Administrator Access Privileges

# Installing the CLI & Initializing a new CDK Project

```sh
$ npm install -g aws-cdk
```

## Initializing A New Project

```sh
$ cd next-backend
$ cdk init --language=typescript
```

The CDK CLI has initialized a new project.

To build the project at any time, you can run the `build` command:

```sh
$ npm run build
```

## Bootstrapping

When you run `cdk bootstrap`, cdk deploys the CDK toolkit stack into an AWS environment. The `cdk bootstrap` command is run one time per account / region.

If this is your first time using CDK, run the following command:

```sh
$ cdk bootstrap

# or

$ cdk bootstrap --profile <aws-profile>
```

## View changes

To view the resources to be deployed or changes in infrastructure at any time, you can run the CDK diff command:

```sh
$ cdk diff
```

Next, install the CDK dependencies we'll be using using either `npm` or `yarn`:


```sh
$ npm install @aws-cdk/aws-cognito @aws-cdk/aws-appsync @aws-cdk/aws-lambda @aws-cdk/aws-dynamodb
```

# Deploying Backend

To see what will be deployed before making changes at any time, you can build the project and run the CDK diff command from the root of the CDK project:

```sh
$ npm run build && cdk diff
```

> Note that if you run this command from another location other than the root of the CDK project, it will not work.

At this point we are ready to deploy the back end. To do so, run the following command from your terminal in the root directory of your CDK project:

```sh
$ npm run build && cdk deploy --profile <aws-profile> -O ../next-client/cdk-exports.json
```


# Deployment Frontend with Serverless Framework

To deploy to AWS, create a new file at the root of the Next.js client app called serverless.yml. In this file, add the following configuration:

```yaml
nextamplified:
  component: "@sls-next/serverless-component@1.17.0"
```

To deploy, run the following command from your terminal:

```sh
$ npx serverless
```

# Removing Services Frontend and Backend

To delete the frontend, run the `remove` comand:

```sh
$ cd next-client
$ npx serverless remove
```

To delete the backend, run the `destroy` comand:

```sh
$ cd next-client
$ npx serverless remove
```