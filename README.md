# HTML Scanner
 
<img width="1274" alt="Screenshot 2025-04-11 at 11 15 30" src="https://github.com/user-attachments/assets/65f6dc48-5e5a-44cf-bb64-5401432e26ab" />


## ------ Backend ------- 


####  Backend Python FastAPI using BeatifulSoup https://www.crummy.com/software/BeautifulSoup/bs4/doc/ 

To update backend

```docker buildx build --platform linux/amd64 -t gcr.io/web-scraper-455220/web-scraper-backend:latest --push .```

Kubernetes deployment

```kubectl apply -f deployment.yaml ```

if that don't work...
```kubectl set image deployment/web-scraper-backend web-scraper-backend=gcr.io/GCP-PROJECT-ID/web-scraper-backend:latest```

## ------ Frontend ------- 
URL: ```http://104.154.157.26/```

####  Frontend React + Vite 
add .env with VITE_BACKEND_URL:
add secrets for gcp project and project ids

Scripts to build and deploy ( see full bash in package.json ):
```
#npm run docker:clean 
#npm run docker:build
#npm run docker:push  
#npm run docker:deploy

#npm run deploy:k8s ( deploy to kluster if needed )
```






