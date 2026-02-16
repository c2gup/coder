FROM node:21-slim

# Install curl and build essentials
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /home/user

# 1. Create the app directly in the WORKDIR
RUN npx --yes create-next-app@16.1.6 . \
    --typescript \
    --tailwind \
    --eslint \
    --app \
    --src-dir \
    --import-alias "@/*"

# 2. Initialize shadcn with a specific style to avoid prompts
# Using the "New York" style and "Slate" base is standard
RUN npx --yes shadcn@3.8.4 init --yes --style new-york --base-color slate

# 3. Add only the components you actually need (recommended) 
# OR keep --all if you want the full library
RUN npx --yes shadcn@3.8.4 add --all --yes

COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# No need to move files if created in WORKDIR