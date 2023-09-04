#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { S3Stack } from '../lib/stacks/s3_stack';
import { DynamoDBStack } from '../lib/stacks/dynamodb_stack';

const app = new App();

// Create the S3 stack
const s3Stack = new S3Stack(app, 'S3Stack');

// Create the DynamoDB stack
const dynamoDBStack = new DynamoDBStack(app, 'DynamoDBStack');
