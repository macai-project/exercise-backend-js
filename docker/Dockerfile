FROM public.ecr.aws/lambda/nodejs:14

RUN yum install -y procps
RUN yum install -y lsof
RUN yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
RUN yum install -y inotify-tools


COPY package.json yarn.lock ${LAMBDA_TASK_ROOT}
COPY bin/entrypoint.sh /lambda-entrypoint.sh


CMD [ "app.handler" ]

