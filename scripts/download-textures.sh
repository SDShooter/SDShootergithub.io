#!/bin/bash

# Create textures directory if it doesn't exist
mkdir -p public/textures

# Download placeholder images from placeholder.com
curl "https://via.placeholder.com/512x512/ff0000/ffffff.jpg?text=Front" -o   /docs/assets/textures/front.jpg
curl "https://via.placeholder.com/512x512/00ff00/ffffff.jpg?text=Back" -o   /docs/assets/textures/back.jpg
curl "https://via.placeholder.com/512x512/0000ff/ffffff.jpg?text=Top" -o    /docs/assets/textures/top.jpg
curl "https://via.placeholder.com/512x512/ffff00/000000.jpg?text=Bottom" -o /docs/assets/textures/bottom.jpg
curl "https://via.placeholder.com/512x512/ff00ff/ffffff.jpg?text=Right" -o /docs/assets/textures/right.jpg
curl "https://via.placeholder.com/512x512/00ffff/000000.jpg?text=Left" -o /docs/assets/textures/left.jpg
