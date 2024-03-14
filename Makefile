install:
    npm ci --legacy-peer-deps

start:
    npm start

build:
    rm build -rf
    npm run build

start-frontend:
    npx react-scripts start -timeout=1000

start-backend:
    npx start-server -p 5001