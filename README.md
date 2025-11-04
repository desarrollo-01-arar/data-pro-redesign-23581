# DataPro Analítica - Sitio Web Corporativo

> Sitio web oficial de DataPro Analítica, especialistas en analítica de datos, automatización de procesos y consultoría Siesa EE.

## 🌐 Sitio en Producción

**URL**: https://datapro.com.co/main/

---

## 🚀 Cómo Editar Este Sitio Web

Este proyecto está conectado con **Lovable** (IA para desarrollo web) y puede ser editado de múltiples formas:

### Opción 1: Usar Lovable (Recomendado para cambios rápidos)

**⚠️ Importante:** Este proyecto está vinculado a la cuenta corporativa de DataPro Analítica en Lovable.

Para realizar cambios a través de Lovable:

1. Solicita acceso a la cuenta de Lovable de DataPro Analítica. (Contacta al administrador del proyecto para obtener credenciales)
2. Inicia sesión en [Lovable](https://lovable.dev/)
3. Accede al [Proyecto de DataPro](https://lovable.dev/projects/479e594a-a183-4cfc-bcb2-50ef2a58283e)
4. Describe los cambios que deseas hacer mediante prompts en lenguaje natural
5. Lovable modificará el código automáticamente
6. Los cambios se guardarán automáticamente en este repositorio

**Ejemplo de prompts:**
- "Cambia el color del botón de contacto a verde"
- "Agrega una nueva sección de testimonios"
- "Actualiza el texto del hero con..."

📚 [Documentación de Lovable](https://docs.lovable.dev/)

---

### Opción 2: Desarrollo Local (Para desarrolladores)

#### Requisitos previos
- Node.js & npm instalados - [Instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git instalado

#### Pasos de instalación

```sh
# 1. Clonar el repositorio
git clone <YOUR_GIT_URL>

# 2. Navegar al directorio del proyecto
cd <YOUR_PROJECT_NAME>

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

---

## 📦 Desplegar Cambios al Servidor

Una vez que hayas realizado y probado tus cambios localmente:

### 1. Generar build de producción

```sh
npm run build
```

Esto creará una carpeta `dist/` con todos los archivos optimizados para producción.

### 2. Subir al servidor

**Importante:** El proyecto usa la ruta base `/main/` configurada en `vite.config.ts`

#### Opción A: Via FTP/cPanel
1. Conecta a tu servidor via FTP o cPanel File Manager
2. Navega a `/main/`
3. **Elimina** todo el contenido actual de la carpeta `main/`
4. **Sube** el contenido de la carpeta `dist/` (los archivos dentro, no la carpeta)
5. Estructura final:
   ```
   /main/
   ├── index.html
   ├── assets/
   │   ├── index-xxx.js
   │   └── index-xxx.css
   └── (otros archivos)
   ```

#### Opción B: Via SSH
```sh
# Conectar al servidor
ssh usuario@datapro.com.co

# Navegar a la carpeta
cd /main/

# Eliminar contenido anterior
rm -rf *

# Subir nuevos archivos (desde tu máquina local)
scp -r dist/* usuario@datapro.com.co:/main/
```

### 3. Verificar en producción

Visita `https://datapro.com.co/main/` y verifica que los cambios se hayan aplicado correctamente.

**Nota:** Si ves contenido antiguo, limpia el caché del navegador (Ctrl + Shift + R en Chrome/Firefox).

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con tecnologías modernas:

- **Vite** - Build tool ultrarrápido
- **React** - Biblioteca de interfaces de usuario
- **TypeScript** - JavaScript con tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes de UI accesibles y personalizables
- **Framer Motion** - Animaciones fluidas
- **React Router** - Navegación SPA
- **Zod** - Validación de formularios

### Backend
- **PHP** - Manejador de formularios
- **PHPMailer** - Envío de correos SMTP

---

## 📝 Otras Formas de Editar

### Editar directamente en GitHub
1. Navega al archivo que deseas editar en este repositorio
2. Haz clic en el ícono de lápiz (✏️) "Edit this file"
3. Realiza tus cambios
4. Haz commit directamente desde GitHub
5. Los cambios se sincronizarán automáticamente con Lovable

### Usar GitHub Codespaces
1. Ve a la página principal de este repositorio
2. Haz clic en el botón verde "Code"
3. Selecciona la pestaña "Codespaces"
4. Haz clic en "New codespace"
5. Edita los archivos en el navegador
6. Haz commit y push cuando termines

---

## 🔧 Configuración Importante

### Configuración de Rutas

El proyecto está configurado para funcionar en la ruta `/main/`:

**vite.config.ts:**
```typescript
export default defineConfig({
  base: '/main/', // Ruta base del proyecto
  // ...
});
```

**React Router:**
```typescript
<BrowserRouter basename="/main">
  {/* Rutas */}
</BrowserRouter>
```

Si necesitas cambiar la ruta de despliegue, modifica ambos archivos.

---

## 📧 Backend del Formulario de Contacto

El formulario de contacto está conectado a un backend PHP ubicado en:

```
/api/contact.php
```

**Estructura del backend:**
```
/api/
├── contact.php          # Manejador principal
└── PHPMailer/           # Librería para envío de correos
    └── src/
        ├── PHPMailer.php
        ├── SMTP.php
        └── Exception.php
```

**Destinatarios de correos:**
- GerenteTIC@inversionesarar.com

**Nota:** Las credenciales SMTP están configuradas para usar Outlook con el correo `redessociales@inversionesarar.com.co`

---

## 🔒 Seguridad

- Las contraseñas SMTP no están en el repositorio
- El backend valida y sanitiza todos los inputs del formulario
- CORS configurado correctamente

---

## 📚 Recursos Útiles

- [Documentación de Lovable](https://docs.lovable.dev/)
- [Guía de Vite](https://vitejs.dev/guide/)
- [Documentación de React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🆘 Soporte

Si encuentras problemas o tienes preguntas:

1. Revisa la [documentación de Lovable](https://docs.lovable.dev/)
2. Crea un issue en este repositorio
3. Contacta al equipo de desarrollo de DataPro Analítica

---

## 📄 Licencia

© 2025 DataPro Analítica. Todos los derechos reservados.

---

**Desarrollado por:** Yariangel Aray  
**Última actualización:** Noviembre 2025
