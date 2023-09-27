FROM golang:1.11 as build

WORKDIR /src/app

COPY app.go .

RUN go build -o /app .

FROM scratch as bin

COPY --from=build app /

CMD ["/app"]