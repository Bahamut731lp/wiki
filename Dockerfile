# Use a stable, well-supported Python base
FROM mcr.microsoft.com/devcontainers/python:3.11-bullseye

# [Optional] Install additional OS packages
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# Set the working directory
WORKDIR /app
COPY . .

RUN pip install -r ./requirements.txt
# Ensure we have the right permissions for the workspace
RUN mkdir -p /app && chown vscode:vscode /app