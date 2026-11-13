#!/usr/bin/env python3
"""
Serveur de développement local optimisé pour la PWA Subway Surfers
Fournit les types MIME corrects pour WebAssembly, WebManifest et Unity WebGL.
"""

import http.server
import socket
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

class PWAServerHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Permettre le cross-origin et le caching pour le Service Worker
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def guess_type(self, path):
        # Types MIME stricts pour PWA et Unity WebGL
        if path.endswith('.wasm'):
            return 'application/wasm'
        if path.endswith('.webmanifest') or path.endswith('.manifest'):
            return 'application/manifest+json'
        if path.endswith('.json'):
            return 'application/json'
        if path.endswith('.data') or path.endswith('.unityweb'):
            return 'application/octet-stream'
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        return super().guess_type(path)

if __name__ == '__main__':
    local_ip = get_local_ip()
    os.chdir(DIRECTORY)

    # Réutiliser l'adresse en cas de redémarrage rapide
    socketserver.TCPServer.allow_reuse_address = True

    try:
        with socketserver.TCPServer(('0.0.0.0', PORT), PWAServerHandler) as httpd:
            print("=" * 60)
            print("🚀 SERVEUR PWA SUBWAY SURFERS PRÊT !")
            print("=" * 60)
            print(f"💻 Sur votre PC    : http://localhost:{PORT}")
            print(f"📱 Sur votre TÉLÉPHONE (même Wi-Fi) : http://{local_ip}:{PORT}")
            print("=" * 60)
            print("Pour installer sur mobile :")
            print(" • Android / Chrome : Ouvrez le lien et appuyez sur 'Installer' ou ⋮ > Ajouter à l'écran d'accueil")
            print(" • iPhone / Safari  : Ouvrez le lien et appuyez sur Partager ⎋ > Sur l'écran d'accueil ➕")
            print("=" * 60)
            print("Appuyez sur Ctrl+C pour arrêter le serveur.")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nArrêt du serveur.")
        sys.exit(0)
    except Exception as e:
        print(f"Erreur au démarrage du serveur : {e}")
        sys.exit(1)
