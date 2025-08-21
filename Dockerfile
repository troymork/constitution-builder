echo "##active_line25##"
FROM node:20-alpine AS builder
echo "##active_line26##"
WORKDIR /app
echo "##active_line27##"
COPY package*.json ./
echo "##active_line28##"
RUN npm ci
echo "##active_line29##"
COPY . .
echo "##active_line30##"
ENV NEXT_TELEMETRY_DISABLED=1
echo "##active_line31##"
RUN npm run build && mkdir -p out && : > out/.nojekyll
echo "##active_line32##"
FROM nginx:alpine
echo "##active_line33##"
COPY --from=builder /app/out /usr/share/nginx/html
echo "##active_line34##"
EXPOSE 8080
echo "##active_line35##"
CMD ["nginx","-g","daemon off;"]
echo "##active_line36##"
