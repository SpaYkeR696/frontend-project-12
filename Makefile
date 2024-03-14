start-frontend:
	make -C frontend start

start-backend:
	npx start-server

start:
	npm run start

build:
	npm run build

lint:
	make -C frontend lint
