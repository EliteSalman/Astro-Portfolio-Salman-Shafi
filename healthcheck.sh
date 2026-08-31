#!/bin/sh
node -e "require('http').get('http://127.0.0.1:4321', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"
