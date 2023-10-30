FROM keymetrics/pm2:18-alpine

# 設定工作目錄
WORKDIR /app

# 作者
MAINTAINER haodai

# 複製所有
COPY . .

# 暴露的連接埠
EXPOSE 3005

## 利用 PM2-runtime 來啟動 Nuxtjs service，並直接使用 env_prod 中的設定
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "prod" ]
