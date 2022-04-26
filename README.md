## INVENTORY BUILDER

this is a small exercise with very simple logic to be implemented: you are dealing with an AWS lambda (basically a function that runs on a cloud server) that receives an event (you can inspect the payload of the event in `models/index.ts`) and needs to store the product present in the payload in Dynamo DB, a no-sql database managed by AWS (you can inspect the structure of the db in `bin/entrypoint.setup.sh`).

The idea behind this exercise is that we are not interested in you solving complex algorithmic problems, nor are we interested in you finishing the exercise with the "correct answer", we just want to give you a realistic problem and take a look at how you usually work, so take your time and structure everything in the same way as you would do for a real project.

Given that deploying the lambda on AWS is a tedious process, you are given a dockerized tests environment that you can use to check that your lambda is behaving.

## RUN THE TESTS

to run the integration tests you can just launch `docker-compose up` from the project root and a few services should be initialized in order to allow you to work locally.

If you have any questions don't hesitate to ask, this is a pairing session! And most of all, have fun! :)
