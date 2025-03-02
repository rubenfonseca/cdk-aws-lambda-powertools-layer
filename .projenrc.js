const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  authorOrganization: true,
  keywords: ['aws', 'cdk', 'powertools', 'python', 'layer', 'lambda', 'devax', 'typescript', 'nodejs'],
  cdkVersion: '2.24.1',
  defaultReleaseBranch: 'main',
  majorVersion: 2,
  name: 'cdk-aws-lambda-powertools-layer',
  repositoryUrl: 'https://github.com/awslabs/cdk-aws-lambda-powertools-layer.git',
  description: 'A lambda layer for AWS Powertools for python and typescript',
  devDeps: [
    '@types/prettier@2.6.0', // pin until breaking changes is resolved: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60310
  ],
  github: false,
  publishToPypi: {
    distName: 'cdk-aws-lambda-powertools-layer',
    module: 'cdk_aws_lambda_powertools_layer',
  },
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
});

project.synth();