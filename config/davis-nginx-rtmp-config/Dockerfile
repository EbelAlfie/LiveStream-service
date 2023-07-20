# Base image that has nginx-rtmp
FROM tiangolo/nginx-rtmp:latest

# Additional config to enable HLS
COPY nginx-rtmp.conf /etc/nginx/nginx.conf

# Port for RTMP
EXPOSE 1935/tcp
# Port for HLS
EXPOSE 80/tcp

# Same as the base container
CMD ["nginx", "-g", "daemon off;"]
