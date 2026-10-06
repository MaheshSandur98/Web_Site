# TechHub Laptop Store

A ready-to-modify responsive demo website for a laptop, gaming PC and computer service business.

## Features
- Responsive storefront
- Laptop filtering
- Product cart
- Gaming PC section
- Repair/service cards
- Service booking demo form
- Contact and business sections
- Docker/Nginx support

## Run locally
Open `index.html` directly in your browser.

Or:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Run with Docker
```bash
docker build -t techhub-store .
docker run -p 8080:80 techhub-store
```

## Future DevOps roadmap
1. Push to GitHub
2. Add GitHub Actions CI/CD
3. Host on AWS
4. Provision AWS infrastructure using Terraform
5. Containerize frontend/backend
6. Deploy to Kubernetes/EKS
7. Add Prometheus and Grafana monitoring
8. Add CloudWatch logs/alerts
9. Add PostgreSQL/RDS backend
10. Add HTTPS, Route 53, Secrets Manager and security scanning

## Important
All product names, prices, contact details and booking behavior are sample/demo data. Replace them before using this as a real commercial website.
