# Web-scraper 
####  Backend Python FastAPI using BeatifulSoup https://www.crummy.com/software/BeautifulSoup/bs4/doc/ 
####  Frontend React + Vite  

<img width="1436" alt="Screenshot 2025-04-01 at 09 44 08" src="https://github.com/user-attachments/assets/0bfefa79-1b6f-4dab-acbc-ea64552b9c8a" />


##------Backend------- 

URL: ```http://34.59.91.18/```


To update backend

```docker buildx build --platform linux/amd64 -t gcr.io/web-scraper-455220/web-scraper-backend:latest --push .```

Kubernetes deployment

```kubectl apply -f deployment.yaml ```

if that don't work...
```kubectl set image deployment/web-scraper-backend web-scraper-backend=gcr.io/GCP-PROJECT-ID/web-scraper-backend:latest```

##------Frontend------- 
URL: ```http://104.154.157.26/```


see package.json, add secrets

Scripts:
```
#npm run docker:clean 
#npm run docker:build
#npm run docker:push  
#npm run docker:deploy

#npm run deploy:k8s ( if needed )
```


Deploy initialize long version: 

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




