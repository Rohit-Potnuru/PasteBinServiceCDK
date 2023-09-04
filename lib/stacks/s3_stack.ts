import { aws_s3, App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';

export class S3Stack extends Stack {
  constructor(parent: App, name: string) {
    super(parent, name);

    const s3BucketName = "paste-bin-data";
    // Create an S3 Bucket
    const s3Bucket = new aws_s3.Bucket(this, s3BucketName, {
      bucketName: s3BucketName,
      removalPolicy: RemovalPolicy.RETAIN,
    });
  }
}
