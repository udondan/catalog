import { App, Stack, RemovalPolicy } from "@aws-cdk/core";
import s3 = require('@aws-cdk/aws-s3');
import { MaterializeBucketIndex } from "../lib/util/materialize-bucket-index";

const app = new App();
const stack = new Stack(app, 'integ-materialize-bucket-index');
const bucket = new s3.Bucket(stack, 'Bucket', {
  removalPolicy: RemovalPolicy.DESTROY
});

new MaterializeBucketIndex(stack, 'Materialize', { bucket });

app.synth();

