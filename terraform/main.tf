provider "google" {
  project = "web-scraper-455220"  # Your project ID
  region  = "us-central1"          # Your region
}

# Create Kubernetes Cluster
resource "google_container_cluster" "primary" {
  name     = "web-scrape-cluster"
  location = "us-central1"

  deletion_protection       = false
  remove_default_node_pool  = true
  initial_node_count        = 1
  network                   = "default"
  subnetwork                = "default"
}

# Create a Node Pool in the GKE Cluster
resource "google_container_node_pool" "primary_nodes" {
  name       = "node-pool"
  location   = "us-central1"
  cluster    = google_container_cluster.primary.name
  node_count = 1

  node_config {
    machine_type = "e2-medium"  # You can change this if needed
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}

# Configure the Kubernetes Provider to work with your GKE Cluster
provider "kubernetes" {
  load_config_file = true
}

# Deploy the Kubernetes resources using the YAML files
resource "kubernetes_manifest" "python_backend_deployment" {
  manifest = yamldecode(file("${path.module}/deploy.yaml"))
}

resource "kubernetes_manifest" "python_backend_service" {
  manifest = yamldecode(file("${path.module}/service.yaml"))
}
