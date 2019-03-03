# Camelot Hub

A fansite and modding resource for Camelot Unchained.

## Setup

Run this install/setup script (or feel free to cherry pick) to setup a pretty comprehensive MAC dev environment.

    curl https://gist.githubusercontent.com/litwicki/23ed9628dbcac265b6c2226dfcbe781f/raw/2ba9508868d808422aa9db78250b0b87edf1f0f7/dev-setup.sh && bash dev-setup.sh

## Initializing

Setup a local environment from S3

    bash ./app/scripts/env.sh --environment={dev|test|prod} [--region=us-west-2]

### Pushing updated configs

    aws s3 cp config/dev.config s3://camelothub/dev.config --region=us-west-2