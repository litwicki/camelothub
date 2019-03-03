#!/bin/bash

for i in "$@"
do
case $i in
    -e=*|--environment=*)
    ENVIRONMENT="${i#*=}"
    shift 
    ;;
    -r=*|--region=*)
    REGION="${i#*=}"
    shift 
    ;;
    --default)
    DEFAULT=YES
    shift 
    ;;
    *)
    # unknown option
    ;;
esac
done

if [ -z "$REGION" ]
then
    REGION='us-west-2'
    echo "Defaulting to region [$REGION]"
fi

if [ -z "$ENVIRONMENT" ]
then
   ENVIRONMENT='dev'
   echo "Defaulting to environment [$ENVIRONMENT]"
fi

echo "Building camelothub.com (${ENVIRONMENT}) in $REGION."

aws s3 cp s3://camelothub/${ENVIRONMENT}.config ../app/.env --region ${REGION}