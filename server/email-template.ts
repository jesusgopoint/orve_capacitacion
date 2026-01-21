export function generateEmailHTML(data: {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}): string {
  const fullName = `${data.nombre} ${data.apellido}`;
  
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>¡Lead Recibido!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; background-color: #f5f5f5;">
  
  <!-- Contenedor principal -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        
        <!-- Email wrapper (600px max) -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Encabezado -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">¡Lead Recibido!</h1>
              <p style="margin: 12px 0 0 0; color: #e0e0e0; font-size: 14px; font-weight: 400; line-height: 1.6;">Acaba de llegar un nuevo lead. Por favor, gestiónalo a la brevedad posible.</p>
            </td>
          </tr>
          
          <!-- Contenido principal -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Tabla de datos -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                
                <!-- Nombre y Apellido -->
                <tr>
                  <td width="35%" style="background-color: #f9f9f9; padding: 14px 16px; border-radius: 4px 0 0 0; font-weight: 700; font-size: 13px; color: #333333; text-transform: uppercase; letter-spacing: 0.5px;">Nombre y Apellido</td>
                  <td width="65%" style="background-color: #ffffff; padding: 14px 16px; border-radius: 0 4px 0 0; font-size: 14px; color: #1a1a1a; font-weight: 500;">${fullName}</td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="background-color: #f9f9f9; padding: 14px 16px; font-weight: 700; font-size: 13px; color: #333333; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td style="background-color: #ffffff; padding: 14px 16px; font-size: 14px; color: #1a1a1a; font-weight: 500;"><a href="mailto:${data.correo}" style="color: #0066cc; text-decoration: none;">${data.correo}</a></td>
                </tr>
                
                <!-- Teléfono -->
                <tr>
                  <td style="background-color: #f9f9f9; padding: 14px 16px; font-weight: 700; font-size: 13px; color: #333333; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</td>
                  <td style="background-color: #ffffff; padding: 14px 16px; font-size: 14px; color: #1a1a1a; font-weight: 500;"><a href="tel:${data.telefono}" style="color: #0066cc; text-decoration: none;">${data.telefono}</a></td>
                </tr>
                
                <!-- Mensaje -->
                <tr>
                  <td style="background-color: #f9f9f9; padding: 14px 16px; border-radius: 0 0 0 4px; font-weight: 700; font-size: 13px; color: #333333; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Mensaje</td>
                  <td style="background-color: #ffffff; padding: 14px 16px; border-radius: 0 0 4px 0; font-size: 14px; color: #1a1a1a; font-weight: 400; line-height: 1.6; word-wrap: break-word;">${data.mensaje.replace(/\n/g, '<br>')}</td>
                </tr>
                
              </table>
              
              <!-- Divisor -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="border-top: 1px solid #e8e8e8; height: 0;"></td>
                </tr>
              </table>
              
              <!-- Sección de Metadatos (UTM) -->
              <div style="background-color: #fafafa; padding: 20px 16px; border-radius: 6px; border-left: 3px solid #0066cc;">
                <p style="margin: 0 0 16px 0; font-size: 12px; font-weight: 700; color: #666666; text-transform: uppercase; letter-spacing: 0.5px;">Parámetros de Seguimiento</p>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <!-- Fila 1: utm_source y utm_medium -->
                  <tr>
                    <td width="50%" style="padding-right: 12px; padding-bottom: 12px;">
                      <p style="margin: 0 0 4px 0; font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 0.3px;">utm_source</p>
                      <p style="margin: 0; font-size: 12px; color: #333333; font-weight: 500;">${data.utmSource || '—'}</p>
                    </td>
                    <td width="50%" style="padding-left: 12px; padding-bottom: 12px;">
                      <p style="margin: 0 0 4px 0; font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 0.3px;">utm_medium</p>
                      <p style="margin: 0; font-size: 12px; color: #333333; font-weight: 500;">${data.utmMedium || '—'}</p>
                    </td>
                  </tr>
                  
                  <!-- Fila 2: utm_campaign y utm_content -->
                  <tr>
                    <td width="50%" style="padding-right: 12px; padding-bottom: 12px;">
                      <p style="margin: 0 0 4px 0; font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 0.3px;">utm_campaign</p>
                      <p style="margin: 0; font-size: 12px; color: #333333; font-weight: 500;">${data.utmCampaign || '—'}</p>
                    </td>
                    <td width="50%" style="padding-left: 12px; padding-bottom: 12px;">
                      <p style="margin: 0 0 4px 0; font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 0.3px;">utm_content</p>
                      <p style="margin: 0; font-size: 12px; color: #333333; font-weight: 500;">${data.utmContent || '—'}</p>
                    </td>
                  </tr>
                  
                  <!-- Fila 3: utm_term (full width) -->
                  <tr>
                    <td colspan="2">
                      <p style="margin: 0 0 4px 0; font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 0.3px;">utm_term</p>
                      <p style="margin: 0; font-size: 12px; color: #333333; font-weight: 500;">${data.utmTerm || '—'}</p>
                    </td>
                  </tr>
                </table>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 24px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
              <p style="margin: 0; font-size: 12px; color: #999999;">Este correo fue generado automáticamente. Por favor, no responda a este mensaje.</p>
              <p style="margin: 8px 0 0 0; font-size: 11px; color: #cccccc;">© ${new Date().getFullYear()} Orve Capacitación. Todos los derechos reservados.</p>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>`;
}
