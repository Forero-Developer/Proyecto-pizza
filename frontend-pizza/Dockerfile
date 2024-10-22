# Etapa 1: Construcción
FROM node:14 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Verifica que el directorio dist haya sido creado
RUN ls -la /app/dist

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Copia los archivos estáticos generados en la fase de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto de Nginx
EXPOSE 80

# Comando por defecto para Nginx
CMD ["nginx", "-g", "daemon off;"]
