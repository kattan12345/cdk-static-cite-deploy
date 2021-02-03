#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStaticCiteDeployStack } from '../lib/cdk-static-cite-deploy-stack';

const app = new cdk.App();
new CdkStaticCiteDeployStack(app, 'CdkStaticCiteDeployStack');
