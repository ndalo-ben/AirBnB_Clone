FROM python:3.9.20-bullseye

WORKDIR /usr/src/bnbclone_backend

RUN apt-get update && apt-get install -y netcat

ENV PYTHONDONTWRITEBYTECODE 1 
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/bnbclone_backend/entrypoint.sh
RUN chmod +x /usr/src/bnbclone_backend/entrypoint.sh

COPY . .

ENTRYPOINT [ "/usr/src/bnbclone_backend/entrypoint.sh" ]