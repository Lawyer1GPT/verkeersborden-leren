#!/bin/bash
# Start Verkeersborden Leren App
# Created: 2026-01-15 07:35 CET

cd /home/mpl_llm/Projects/verkeersborden-leren

echo "=========================================="
echo "Verkeersborden Leren App"
echo "=========================================="
echo ""
echo "Starting HTTP server on port 8080..."
echo ""
echo "Access the app at:"
echo "  Local:     http://localhost:8080/app.html"
echo "  Network:   http://192.168.2.71:8080/app.html"
echo "  Tailscale: http://spark-d12f:8080/app.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

python3 -m http.server 8080
