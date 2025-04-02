##📌 Como rodar o projeto?
#Instale o TypeScript e inicialize o projeto:
npm init -y
npm install typescript ts-node @types/node
npx tsc --init
#Para executar diretamente sem compilar:
npx ts-node src/index.ts
#Se quiser compilar e rodar:
npx tsc
node dist/index.js

