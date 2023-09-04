# PasteBinServiceCDK
This Repository is implementing CDK infrastructure for Paste Bin Service

## Deployment Procedure
To deploy changes using CDK, please follow the below steps. 
1. Create an AWS Profile in your local using AWS CLI.
   * `aws configure --profile <profile-name>`
2. Verify AWS CLI Configuration
   * `aws configure list --profile <profile-name>`
3. Prepare your AWS environment for deploying CDK applications
   * `cdk boostrap` - sets up the necessary resources and permissions to enable CDK deployments to function properly.
4. Deploy the created or modified resources in CDK
   * `AWS_PROFILE=<profile-name> cdk deploy`


# Welcome to your CDK TypeScript project
The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands
* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
