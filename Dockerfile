FROM python:3.11

WORKDIR /app

# Copy the requirements.txt file first to install dependencies
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files (including app.py)
COPY . .

EXPOSE 5000

# Use Uvicorn to run the FastAPI app
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]
