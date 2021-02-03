#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStaticCiteDeployStack } from '../lib/cdk-static-cite-deploy-stack';

const awsAccountID = process.env.AWS_ACCOUNT_ID || '';
const awsRegion = process.env.AWS_DEFAULT_REGION || 'ap-northeast-1';
const deployEnv = process.env.DEPLOY_ENV || 'staging';
const suffix = deployEnv !== 'production' ? '-' + deployEnv : '';

const app = new cdk.App();

// CdkStaticCiteDeployStackクラスは使い回す

new CdkStaticCiteDeployStack(app, `CdkStaticCiteDeployStack${suffix}`, { env: { account: awsAccountID, region: awsRegion}});