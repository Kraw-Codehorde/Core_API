FROM nginx:1.25

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# create the appropriate directories
# ENV HOME=/usr/src
# ENV APP_HOME=/usr/src/app
# RUN mkdir $APP_HOME
# RUN mkdir $APP_HOME/staticfiles
# WORKDIR $APP_HOME