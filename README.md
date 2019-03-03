# Camelot Hub

A fansite and modding resource for Camelot Unchained.

## Setup

Run this install/setup script (or feel free to cherry pick) to setup a pretty comprehensive MAC dev environment.

    git clone https://gist.github.com/23ed9628dbcac265b6c2226dfcbe781f.git && bash ./23ed9628dbcac265b6c2226dfcbe781f/dev-setup.sh

## Initializing

Setup a local environment from S3

    bash ./app/scripts/env.sh --environment={dev|test|prod} [--region=us-west-2]

### Pushing updated configs

    aws s3 cp config/dev.config s3://camelothub/dev.config --region=us-west-2

## CodeBuild Local

    codebuild -i aws/codebuild/nodejs:10.14.1 -a /path/to/artifacts -s /path/to/src -b buildspec-{ENV}.yml