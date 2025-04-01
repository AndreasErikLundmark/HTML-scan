provider "google" {
  project = "web-scraper-455220"  # Byt ut med ditt projekt-ID
  region  = "us-central1"  # Du kan byta till önskad region
}

# Skapa Kubernetes-klustret
resource "google_container_cluster" "primary" {
  name     = "web-scrape-cluster"
  location = "us-central1"

  deletion_protection = false 
  remove_default_node_pool = true
  initial_node_count       = 1

  network    = "default"
  subnetwork = "default"
}

# Skapa en nodepool i GKE-klustret
resource "google_container_node_pool" "primary_nodes" {
  name       = "node-pool"
  location   = "us-central1"
  cluster    = google_container_cluster.primary.name
  node_count = 1

  node_config {
    machine_type = "e2-medium"  # Du kan ändra maskinstorlek om du vill
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}
Hej Magdalena,

Läste Alecta, om det är t e x cobol de är ute efter så blir jag en dålig match ( läser inte cobol nu ) Utöver det kan det eventuellt vara något om inte arbetslivserfarenheten är väldigt viktigt för dem. 