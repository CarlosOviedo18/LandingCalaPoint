# Despliegue en Hostinger

## Requisitos previos
- Cuenta en Hostinger con soporte para Node.js
- Acceso cPanel o SSH
- Git instalado en tu máquina local

## Paso 1: Preparar el proyecto

### Frontend (React/Vite)
1. Abre `.env.example` y copia el contenido
2. Crea un archivo `.env.production` en la raíz del proyecto
3. Reemplaza `VITE_API_URL` con tu URL de Hostinger:
   ```
   VITE_API_URL=https://tudominio.com/api
   ```
4. Corre el build:
   ```bash
   npm run build
   ```
5. La carpeta `dist/` contiene el frontend listo para producción

### Backend (Express)
1. Crea un archivo `.env` en la raíz con estas variables (Hostinger te proporciona estos datos):
   ```
   PORT=3000
   NODE_ENV=production
   MYSQL_HOST=tu-host-mysql-de-hostinger
   MYSQL_PORT=3306
   MYSQL_USER=tu-usuario-db
   MYSQL_PASSWORD=tu-contraseña-db
   MYSQL_DATABASE=nombre-de-tu-db
   ```

## Paso 2: En Hostinger (cPanel o SSH)

### Crear la base de datos
1. Accede al cPanel de Hostinger
2. Abre "MySQL Databases"
3. Crea una nueva base de datos
4. Crea un usuario y vincularlo a la BD
5. Copia las credenciales para el `.env`

### Subir el backend (Node.js)
1. En cPanel, ve a "Node.js Manager" o "Application Manager"
2. Crea una nueva aplicación Node.js
3. Selecciona la versión 18+ o 20+
4. Define el puerto (ej: 3000)
5. Clona tu repositorio o sube los archivos con SFTP
6. Navega a la carpeta del proyecto
7. Corre `npm install` para instalar dependencias
8. El servidor se reiniciará automáticamente

### Subir el frontend (React)
1. Copia la carpeta `dist/` (generada con `npm run build`)
2. Conecta por SFTP a Hostinger
3. Navega a `public_html` (o la carpeta publica de tu dominio)
4. Sube todo el contenido de `dist/` allí
5. Configura el dominio para apuntar a esa carpeta

## Paso 3: Configurar URLs en producción

El frontend ya está configurado para leer `VITE_API_URL` del archivo `.env.production`.
El backend leerá todas las variables de su `.env`.

## Paso 4: Testing

1. Abre tu sitio en `https://tudominio.com`
2. Prueba el formulario de email
3. Verifica en cPanel que los requests llegan al backend
4. Confirma que los emails se guardan en la BD

## Notas importantes
- **HTTPS**: Hostinger proporciona SSL gratis. Asegúrate de que está habilitado
- **CORS**: Si hay errores de CORS, actualiza `index.js` del backend para permitir tu dominio
- **Variables de entorno**: No commits `.env` a Git; usa `.env.example` como referencia
- **Backups**: Activa backups automáticos en Hostinger

## Si hay problemas

### El formulario no envía datos
- Verifica que `VITE_API_URL` en `.env.production` sea correcto
- Abre DevTools (F12) → Console y busca errores CORS

### Base de datos no conecta
- Verifica las credenciales en `.env`
- Asegúrate de que el usuario de BD tiene permisos correctos

### Node.js no inicia
- Revisa los logs en Hostinger
- Verifica que `index.js` existe y es válido
