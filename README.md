# web-scrape

Backend 

URL: ```http://34.59.91.18/```


To update backend

```docker buildx build --platform linux/amd64 -t gcr.io/web-scraper-455220/web-scraper-backend:latest .```
```docker push gcr.io/web-scraper-455220/web-scraper-backend:latest```

Kubernetes deployment

```kubectl apply -f deployment.yaml ```

Frontend 

Deploy initialize
Create image and push:
cd ../frontend
```
docker buildx build --platform linux/amd64,linux/arm64 -t gcr.io/web-scraper-455220/web-scrape-fe:latest --push .

```



