# OrionTek Client Management System

Este proyecto es una solución fullstack para gestionar clientes y sus direcciones, desarrollado con un backend en **C# (ASP.NET Core)** y un frontend en **Angular**.

## Estructura del Proyecto

- `Backend/` - Proyecto ASP.NET Core para el backend de la aplicación.
- `Frontend/` - Proyecto Angular para el frontend de la aplicación.

---

## Requisitos Previos

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js y npm](https://nodejs.org/) (para el frontend)
- [Angular CLI](https://angular.io/cli) - `npm install -g @angular/cli`
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) o cualquier base de datos compatible

---

## Configuración del Backend

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/usuario/oriontek-client-management.git
   cd oriontek-client-management/Backend
   ```

2. **Configuración de la base de datos**:

   - Abre `appsettings.json` y configura la cadena de conexión de SQL Server:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=TU_SERVIDOR;Database=OrionTekDB;Trusted_Connection=True;MultipleActiveResultSets=true"
     }
     ```

3. **Migraciones y actualización de la base de datos**:

   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

4. **Ejecutar el proyecto**:

   ```bash
   dotnet run
   ```

   El backend estará disponible en `https://localhost:5001` (puerto configurado en `launchSettings.json`).

---

## Configuración del Frontend

1. **Instalar dependencias**:

   ```bash
   cd ../Frontend
   npm install
   ```

2. **Configurar el archivo `environment.ts`**:

   - En `src/proxy.conf.json`, establece la URL de la API:
     ```json
     {
        "/api": {
        "target": "https://localhost:7271",
        "secure": false
        }
     }


3. **Ejecutar el proyecto Angular**:
   ```bash
   ng serve

El frontend estará disponible en `http://localhost:4200`.

---

## Uso

1. Navega a `http://localhost:4200` para acceder a la aplicación.
2. Puedes:
   - Ver la lista de clientes.
   - Crear, editar y eliminar clientes.
   - Ver las direcciones de cada cliente y gestionarlas.

---

## Comandos Útiles

- **Compilar el backend**: `dotnet build`
- **Ejecutar pruebas en el backend**: `dotnet test`
- **Compilar el frontend para producción**: `ng build --prod`

---

## Despliegue

### Despliegue del Backend

1. **Publicar el proyecto**:
   ```bash
   dotnet publish -c Release
   ```
2. **Configurar la base de datos en el servidor** y actualizar `appsettings.json` con la cadena de conexión del servidor.

### Despliegue del Frontend

1. **Construir para producción**:
   ```bash
   ng build --prod
   ```
2. **Subir los archivos de la carpeta `dist`** a un servidor web o CDN.

---

## Contribución

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
