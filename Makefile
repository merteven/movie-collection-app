docker-run:
	docker build -t movie_collection_app --network=host . && docker run --rm -p 4200:80 movie_collection_app
