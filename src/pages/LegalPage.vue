<script setup lang="ts">
import { computed } from 'vue';
import BrandLogo from '../components/BrandLogo.vue';
import { contact, formatPhone } from '../data/contact';

type LegalPageType = 'privacy' | 'terms';

const props = defineProps<{ type: LegalPageType }>();

const page = computed(() => {
  if (props.type === 'privacy') {
    return {
      eyebrow: 'Aviso legal',
      title: 'Aviso de privacidad',
      lead:
        'Este aviso explica cómo recabamos, usamos y protegemos los datos personales relacionados con solicitudes de cotización, atención comercial y servicios de tarimas y empaques industriales.',
      updated: 'Mayo 2026'
    };
  }

  return {
    eyebrow: 'Condiciones del sitio',
    title: 'Términos y condiciones',
    lead:
      'Estas condiciones regulan el uso del sitio web, las solicitudes de información y el proceso comercial preliminar para productos y servicios de El Trébol.',
    updated: 'Mayo 2026'
  };
});
</script>

<template>
  <section class="legal-page" :aria-labelledby="props.type === 'privacy' ? 'privacy-title' : 'terms-title'">
    <div class="container legal-page__shell">
      <aside class="legal-page__aside" data-reveal>
        <BrandLogo />
        <p>
          Documento informativo para clientes, prospectos y visitantes del sitio web de {{ contact.brandName }}.
        </p>
        <a class="legal-page__back" href="/">Volver al sitio</a>
      </aside>

      <article class="legal-page__content" data-reveal>
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1 :id="props.type === 'privacy' ? 'privacy-title' : 'terms-title'">{{ page.title }}</h1>
        <p class="legal-page__lead">{{ page.lead }}</p>
        <p class="legal-page__updated">Última actualización: {{ page.updated }}</p>

        <template v-if="props.type === 'privacy'">
          <section>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              {{ contact.legalName }}, comercialmente identificado como {{ contact.brandName }} Tarimas y Empaques Industriales, con domicilio en {{ contact.addressLine1 }}, {{ contact.addressLine2 }}, es responsable del uso, protección y tratamiento de los datos personales que se recaben a través de este sitio web, llamadas telefónicas, WhatsApp, correo electrónico, formularios, cotizaciones y cualquier otro medio de contacto comercial.
            </p>
            <p>
              Para cualquier asunto relacionado con privacidad o datos personales, puedes contactarnos en <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> o al teléfono <a :href="`tel:+52${contact.phoneCallNumber}`">{{ formatPhone(contact.phoneCallNumber) }}</a>.
            </p>
          </section>

          <section>
            <h2>2. Datos personales que podemos recabar</h2>
            <p>
              Podemos recabar datos de identificación y contacto como nombre, empresa, cargo, teléfono, correo electrónico, domicilio de entrega o facturación, ciudad, entidad federativa y datos necesarios para preparar una cotización o dar seguimiento a una solicitud. También podemos recibir información operativa, como tipo de tarima requerida, medidas, volumen, destino, frecuencia de compra, requisitos logísticos y comentarios enviados por el usuario.
            </p>
            <p>
              No solicitamos datos personales sensibles a través de este sitio. Si el usuario los proporciona voluntariamente, se entenderá que lo hace bajo su propia responsabilidad y únicamente se utilizarán cuando resulten indispensables para atender su solicitud.
            </p>
          </section>

          <section>
            <h2>3. Finalidades primarias</h2>
            <p>Usamos los datos personales para las siguientes finalidades necesarias:</p>
            <ul>
              <li>Atender solicitudes de información, cotización o contacto.</li>
              <li>Preparar propuestas comerciales, fichas técnicas, precios, tiempos de entrega y condiciones de suministro.</li>
              <li>Coordinar producción, logística, entrega, facturación, cobranza y servicio postventa cuando exista una relación comercial.</li>
              <li>Dar seguimiento a pedidos, aclaraciones, garantías, devoluciones o reclamaciones procedentes.</li>
              <li>Cumplir obligaciones legales, fiscales, administrativas y contractuales aplicables.</li>
            </ul>
          </section>

          <section>
            <h2>4. Finalidades secundarias</h2>
            <p>
              De forma adicional, podremos utilizar tus datos para seguimiento comercial, encuestas de satisfacción, envío de información sobre productos, promociones, nuevos servicios o recordatorios relacionados con tarimas, empaques y soluciones industriales. Puedes oponerte a estas finalidades enviando un correo a <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> con el asunto “Baja de comunicaciones”.
            </p>
          </section>

          <section>
            <h2>5. Transferencias y encargados</h2>
            <p>
              Podemos compartir datos estrictamente necesarios con proveedores de logística, transporte, manufactura, tecnología, administración, contabilidad, facturación, cobranza, asesoría legal o fiscal, así como con autoridades competentes cuando sea requerido por ley. Estas transferencias se limitan a lo necesario para cumplir las finalidades descritas y la relación comercial correspondiente.
            </p>
          </section>

          <section>
            <h2>6. Derechos ARCO y revocación del consentimiento</h2>
            <p>
              Puedes solicitar el acceso, rectificación, cancelación u oposición respecto de tus datos personales, así como revocar el consentimiento para su tratamiento cuando sea legalmente procedente. Para ejercer estos derechos, envía una solicitud a <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> indicando tu nombre, medio de contacto, derecho que deseas ejercer y una descripción clara de tu solicitud.
            </p>
            <p>
              En algunos casos podremos solicitar información adicional para confirmar tu identidad o la representación legal correspondiente. La respuesta se dará conforme a los plazos y requisitos previstos por la legislación aplicable en México.
            </p>
          </section>

          <section>
            <h2>7. Cookies, analítica y tecnologías similares</h2>
            <p>
              El sitio puede utilizar cookies técnicas necesarias para su funcionamiento y, en su caso, herramientas de medición o analítica para conocer el uso general del sitio y mejorar la experiencia. Puedes deshabilitar cookies desde la configuración de tu navegador, aunque algunas funciones podrían no operar correctamente.
            </p>
          </section>

          <section>
            <h2>8. Seguridad y conservación</h2>
            <p>
              Aplicamos medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado. Conservaremos los datos durante el tiempo necesario para cumplir las finalidades descritas, obligaciones legales, fiscales o contractuales, y posteriormente serán eliminados, bloqueados o anonimizados cuando corresponda.
            </p>
          </section>

          <section>
            <h2>9. Cambios al aviso de privacidad</h2>
            <p>
              Este aviso puede modificarse por cambios legales, operativos o comerciales. Las actualizaciones estarán disponibles en este sitio web. El uso posterior del sitio o de nuestros canales de contacto implicará el conocimiento de la versión vigente.
            </p>
          </section>
        </template>

        <template v-else>
          <section>
            <h2>1. Identidad del titular del sitio</h2>
            <p>
              Este sitio web es operado por {{ contact.legalName }}, comercialmente identificado como {{ contact.brandName }} Tarimas y Empaques Industriales, con domicilio en {{ contact.addressLine1 }}, {{ contact.addressLine2 }}. Puedes contactarnos en <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> o al teléfono <a :href="`tel:+52${contact.phoneCallNumber}`">{{ formatPhone(contact.phoneCallNumber) }}</a>.
            </p>
          </section>

          <section>
            <h2>2. Uso del sitio</h2>
            <p>
              El sitio tiene fines informativos y comerciales. Su contenido permite conocer productos, servicios, sectores atendidos, cobertura y medios de contacto para solicitar cotizaciones de tarimas, empaques y soluciones industriales. El usuario se obliga a utilizar el sitio de forma lícita, responsable y sin afectar su funcionamiento, seguridad, reputación o disponibilidad.
            </p>
          </section>

          <section>
            <h2>3. Cotizaciones y relación comercial</h2>
            <p>
              Las solicitudes enviadas por WhatsApp, teléfono, correo o formularios no constituyen aceptación automática de un pedido. Toda cotización está sujeta a validación de especificaciones, medidas, cantidad, disponibilidad de materiales, ubicación de entrega, condiciones logísticas, vigencia, impuestos y confirmación expresa por parte de {{ contact.brandName }}.
            </p>
            <p>
              Los precios, tiempos de entrega, características y condiciones comerciales pueden variar sin previo aviso hasta que exista una cotización formal aceptada por las partes.
            </p>
          </section>

          <section>
            <h2>4. Productos, imágenes y especificaciones</h2>
            <p>
              Las imágenes del sitio son ilustrativas y pueden diferir del producto final por variaciones naturales de la madera, procesos de fabricación, reciclaje, disponibilidad, medidas, acabados, refuerzos o requerimientos particulares del cliente. Las especificaciones técnicas deberán confirmarse por escrito antes de fabricar, entregar o facturar cualquier pedido.
            </p>
          </section>

          <section>
            <h2>5. Entregas, cobertura y recepción</h2>
            <p>
              Las entregas se coordinan conforme a la zona de cobertura, volumen, rutas disponibles, accesos, horarios, condiciones de carga y descarga, y confirmación logística. El cliente deberá proporcionar información correcta del lugar de entrega, condiciones de acceso y personal disponible para recepción. Cualquier maniobra especial, espera, reprogramación o traslado adicional podrá generar costos extra si así se pacta.
            </p>
          </section>

          <section>
            <h2>6. Pagos, facturación y cancelaciones</h2>
            <p>
              Las condiciones de pago, anticipo, crédito, facturación, cancelación o modificación de pedidos deberán acordarse por escrito en la cotización o documento comercial correspondiente. Los pedidos personalizados, fabricados a medida o preparados conforme a instrucciones del cliente pueden no ser cancelables una vez iniciada su fabricación, salvo acuerdo expreso entre las partes.
            </p>
          </section>

          <section>
            <h2>7. Garantías y reclamaciones</h2>
            <p>
              Cualquier reclamación deberá realizarse dentro del plazo acordado comercialmente y acompañarse de evidencia suficiente, como fotografías, folio de pedido, fecha de entrega y descripción del problema. No procederán reclamaciones derivadas de uso inadecuado, sobrecarga, humedad, almacenamiento incorrecto, modificaciones no autorizadas, exposición fuera de condiciones razonables o desgaste natural del material.
            </p>
          </section>

          <section>
            <h2>8. Propiedad intelectual</h2>
            <p>
              El diseño, textos, fotografías, logotipos, composición visual, elementos gráficos y demás contenidos del sitio pertenecen a {{ contact.brandName }} o se utilizan con autorización. Queda prohibida su reproducción, modificación, distribución o uso comercial sin autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2>9. Limitación de responsabilidad</h2>
            <p>
              Hacemos esfuerzos razonables para mantener la información del sitio actualizada, pero no garantizamos que esté libre de errores, interrupciones o desactualizaciones. {{ contact.brandName }} no será responsable por daños derivados del uso indebido del sitio, fallas de terceros, interrupciones de internet, enlaces externos, decisiones tomadas sin confirmación comercial o información proporcionada incorrectamente por el usuario.
            </p>
          </section>

          <section>
            <h2>10. Enlaces externos y canales de terceros</h2>
            <p>
              El sitio puede enlazar a WhatsApp, Google Maps, redes sociales u otros servicios de terceros. Cada plataforma opera bajo sus propios términos, políticas y medidas de privacidad. El usuario deberá revisarlas antes de utilizar dichos servicios.
            </p>
          </section>

          <section>
            <h2>11. Privacidad</h2>
            <p>
              El tratamiento de datos personales se rige por nuestro <a href="/aviso-de-privacidad">Aviso de privacidad</a>, disponible en este sitio web.
            </p>
          </section>

          <section>
            <h2>12. Legislación y jurisdicción</h2>
            <p>
              Estos términos se interpretarán conforme a las leyes aplicables en México. Para cualquier controversia relacionada con el uso del sitio o una relación comercial no resuelta de común acuerdo, las partes se someterán a las autoridades competentes en el Estado de México, salvo que una disposición legal aplicable establezca otra jurisdicción obligatoria.
            </p>
          </section>
        </template>

        <div class="legal-page__note">
          <strong>Nota:</strong> Este documento es una base preventiva para publicación web. Debe revisarse con asesoría legal antes de considerarse definitivo o adaptarse a operaciones fiscales, contratos, tratamiento de datos o procesos internos específicos.
        </div>
      </article>
    </div>
  </section>
</template>
