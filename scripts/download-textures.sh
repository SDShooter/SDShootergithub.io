#!/bin/bash

# Create textures directory if it doesn't exist
mkdir -p public/textures

# Download placeholder images from placeholder.com
curl "https://via.placeholder.com/512x512/ff0000/ffffff.jpg?text=Front" -o public/textures/front.jpg
curl "https://via.placeholder.com/512x512/00ff00/ffffff.jpg?text=Back" -o public/textures/back.jpg
curl "https://via.placeholder.com/512x512/0000ff/ffffff.jpg?text=Top" -o public/textures/top.jpg
curl "https://via.placeholder.com/512x512/ffff00/000000.jpg?text=Bottom" -o public/textures/bottom.jpg
curl "https://via.placeholder.com/512x512/ff00ff/ffffff.jpg?text=Right" -o public/textures/right.jpg
curl "https://via.placeholder.com/512x512/00ffff/000000.jpg?text=Left" -o public/textures/left.jpg
