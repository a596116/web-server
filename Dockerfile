FROM keymetrics/pm2:18-alpine

# 設定工作目錄
WORKDIR /app

# 作者
MAINTAINER haodai

# 複製 package.json 和 package-lock.json 至工作目錄
COPY package*.json .
COPY pnpm-lock.yaml .

# 複製所有
COPY . .

# 暴露的連接埠
EXPOSE 3000

## 利用 PM2-runtime 來啟動 Nuxtjs service，並直接使用 env_prod 中的設定
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "prod" ]
