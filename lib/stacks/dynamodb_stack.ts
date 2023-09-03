import { aws_dynamodb, App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { BillingMode } from 'aws-cdk-lib/aws-dynamodb';

export class DynamoDBStack extends Stack {
  constructor(parent: App, name: string) {
    super(parent, name);

    const pasteBinTableName = 'PasteBinMetaData';
    // Create a DynamoDB Table
    const pasteBinTable = new aws_dynamodb.Table(this, pasteBinTableName, {
        tableName: pasteBinTableName,
        partitionKey: { name: 'pasteBinId', type: aws_dynamodb.AttributeType.STRING },
        removalPolicy: RemovalPolicy.RETAIN,
        billingMode: BillingMode.PAY_PER_REQUEST,
        pointInTimeRecovery: true,
        timeToLiveAttribute: 'expiryTime'
    });

    pasteBinTable.addGlobalSecondaryIndex({
        indexName: 'PasteBinIdsByUserId',
        partitionKey: { name: 'userId', type: aws_dynamodb.AttributeType.STRING },
        sortKey: { name: 'pasteBinId', type: aws_dynamodb.AttributeType.STRING },
        projectionType: aws_dynamodb.ProjectionType.KEYS_ONLY,
    });
  }
}
