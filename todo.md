# Orve Capacitación - Project TODO

## Completed Features

- [x] Website structure created with all main sections (homepage, wellness program landing page, team section, FAQ)
- [x] Contact forms implemented on homepage and wellness landing page (/programa-de-bienestar)
- [x] Resend email service successfully integrated with backend
- [x] Email template created with professional HTML/CSS design
- [x] Thank you page (/gracias) created with redirect after form submission
- [x] Google Tag Manager (GTM-W2696PHZ) installed in the website
- [x] Project upgraded from web-static to web-db-user to enable backend functionality
- [x] Forms working in preview/development environment
- [x] Email notifications sending to seo@gopointagency.com from comercial@orvecapacitacion.cl
- [x] Evento dataLayer 'form_submission' agregado a ambos formularios (Contact.tsx y WellnessProgramLanding.tsx)
- [x] Endpoint /api/send-email agregado a servidor tRPC en server/_core/index.ts para que funcione en producción

## In Progress / Pending

- [x] Fix forms on published website (backend endpoint agregado a server/_core/index.ts)
- [x] Campos ocultos UTM agregados a WellnessProgramLanding.tsx
- [x] Evento 'form_ready' agregado para notificar a GTM cuando formularios estan listos
- [x] Header y Footer agregados a página de gracias
- [x] Campos UTM cambiados a inputs no controlados para que GTM pueda inyectar valores
- [x] Evento personalizado 'gtmFormReady' agregado para activar radar de GTM cuando formularios estan listos
- [ ] Test published website to verify forms and GTM events working correctly
- [x] Modificar formularios para enviar correos a seo@gopointagency.com y comercial@orvecapacitacion.cl
- [x] Crear página /capacitacion-laboral replicando exactamente el diseño de /programa-de-bienestar
- [x] Agregar enlace a Capacitación Laboral en menú de Servicios
- [x] Agregar botón Orve Learning transparente con borde en Header y Footer
- [x] Agregar etiqueta meta de Google Search Console en index.html
- [x] Mover botón Orve Learning al menú del Header con color morado
- [x] Crear página /team-building duplicando /programa-de-bienestar
- [x] Agregar Team Building al menú de Servicios
