module.exports = {
  apps: [
    {
      name: 'server',
      script: './dist/main.js',
      instances: 'max', // 負載平衡模式下的 cpu 數量
      exec_mode: 'cluster', // cpu 負載平衡模式
      max_memory_restart: '10G', // 緩存了多少記憶體重新整理
      env_prod: {
        name: 'server_prod',
        PORT: 3005, //指定伺服器上的 port
        NODE_ENV: 'prod',
      },
    },
  ],
};
