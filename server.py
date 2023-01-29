import os
import http.server
import socketserver
import main

from http import HTTPStatus


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(HTTPStatus.OK)
        self.end_headers()
        msg = 'Python is running on Qoddi! You requested %s' % self.path
        # self.wfile.write(msg.encode())
        main.root()


port = int(os.getenv('PORT', 8080))
print('Listening on port %s' % port)
httpd = socketserver.TCPServer(('', port), Handler)
httpd.serve_forever()