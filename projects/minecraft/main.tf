provider "google" {
  credentials = "${file("account.json")}"
  project     = "minecraft-210203"
  region      = "us-central1"
}

// Create a new instance
resource "google_compute_instance" "default" {
  name         = "test"
  machine_type = "n1-standard-1"
  zone         = "us-central1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-8"
    }
  }

  // Local SSD disk
  scratch_disk {
  }

  network_interface {
    network = "default"

    access_config {
    // Ephemeral IP
    }
  }

  metadata {
    foo = "bar"
  }

  metadata_startup_script = "echo hi > /test.txt"

  service_account {
  scopes = ["userinfo-email", "compute-ro", "storage-ro"]
  }
}
