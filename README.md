# web-scrape

Backend 

URL: ```http://34.59.91.18/```


To update backend

```docker buildx build --platform linux/amd64 -t gcr.io/web-scraper-455220/web-scraper-backend:latest .```
```docker push gcr.io/web-scraper-455220/web-scraper-backend:latest```

Kubernetes deployment

```kubectl apply -f deployment.yaml ```

# ------Frontend------- 

Deploy initialize
### 1. Create image and push:
cd ../frontend
```
docker buildx build --platform linux/amd64,linux/arm64 -t gcr.io/web-scraper-455220/web-scrape-fe:latest --push .

```

### 2. Check image container registry
```gcloud container images list-tags gcr.io/web-scraper-455220/web-scrape-fe --project=web-scraper-455220```
### 3. Deploy to kubernetes
```kubectl apply -f frontend/fe-deployment.yaml```
```kubectl apply -f frontend/fe-service.yaml```

### 4. Redeploy kubernetes pods ( if you have failing image pulls ) 
```kubectl delete pod -l app=web-scrape-fe```
### 5. Check pod status
```kubectl get pods ```
```kubectl get service ```




