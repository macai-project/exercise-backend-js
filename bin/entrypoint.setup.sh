#!/bin/sh

aws dynamodb create-table \
  --endpoint-url=http://localstack:4566 \
  --region eu-west-1 \
  --table-name inventory \
  --attribute-definitions \
  AttributeName=id,AttributeType=S \
  --key-schema \
  AttributeName=id,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

