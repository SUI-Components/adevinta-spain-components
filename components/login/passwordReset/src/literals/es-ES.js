export default {
  LOGIN_CROSS: {
    LOGIN: {
      INTRO_TEXT: 'Administra tu herramienta',
      INTRO_TITLE: '¡Hola! Bienvenidos',
      TITLE: 'Iniciar sesión',
      FORGOT_YOUR_PASSWORD: '¿Has olvidado la contraseña?',
      RELAYING_ON_THIS_DEVICE: 'Confiar en este dispositivo',
      ENTER_YOUR_PASSWORD: 'Escribe la contraseña',
      PASSWORD: 'Contraseña',
      SUBMIT_BUTTON: 'Iniciar sesión',
      EMAIL: 'Email',
      FACE_RECOGNITION: 'Acceder con Face ID'
    },
    PASSWORD_RESET: {
      DOUBTS: {
        TEXT: 'Envíanos un <a href="mailto:xxxxxx">email</a> o llámanos al <a href="tel:xxxxxx">xxxxx</a>.',
        TITLE: '¿Tienes dudas?',
        TOOLTIP: 'Horario de atención al cliente: <br> De lunes a viernes de 9 a 20 h <br> Sábados de 9 a 14 h'
      },
      STEP_1: {
        LABEL: 'Introduce tu email',
        MESSAGE:
          'Escribe tu email de usuario y te enviaremos un correo para poder restaurarla. Recuerda que solo es válido durante 24h.',
        TITLE: '¿Has olvidado tu contraseña?',
        EMAIL_LABEL: 'Email',
        EMAIL_PLACEHOLDER: 'Escribe email',
        ERRORS: {
          EMPTY_EMAIL: 'Introduce tu email',
          INVALID_EMAIL: 'El email no es válido'
        },
        RETURN_BUTTON: 'Volver a iniciar sesión',
        RESEND_TEXT: 'Espera unos minutos, comprueba tu bandeja de SPAM y si sigues sin recibirlo clica en este',
        RESEND_TITLE: '<strong>¿No has recibido aún el email?</strong>',
        RESEND_LINK: 'enlace',
        SUCCESS: {
          EMAIL_SENDED: 'Email enviado a %{email}. Revisa tu bandeja de entrada antes de 24h',
          EMAIL_RESEND: 'Te hemos vuelto a enviar un email con las instrucciones para recuperar la contraseña.'
        },
        SUBMIT_BUTTON: 'Enviar email'
      },
      STEP_2: {
        LABEL: 'Crea tu nueva contraseña',
        MESSAGE: 'Recuerda que para que la contraseña sea válida esta debe contener un mínimo de 8 letras o números.',
        TITLE: '¿Has olvidado tu contraseña?',
        PLACEHOLDER: 'Escribe tu contraseña',
        REPEAT_PASSWORD_LABEL: 'Repite tu nueva contraseña',
        SUBMIT_BUTTON: 'Guardar nueva contraseña',
        NEW_PASSWORD_LABEL: 'Tu nueva contraseña',
        ERRORS: {
          INVALID_INPUT: 'La contraseña debe contener un mínimo de 8 letras o números',
          INVALID_PASSWORDS: 'Las contraseñas no coinciden.',
          SERVER_ERROR: 'Hemos detectado un error. Vuelve a intentarlo en unos minutos.',
          EXPIRED_TOKEN:
            'El enlace que has clicado ha expirado. Vuelve a iniciar el proceso para recuperar tu contraseña.',
          EMPTY_PASSWORD: 'Introduce tu nueva contraseña',
          INVALID_PASSWORD: 'La contraseña debe contener un mínimo de 8 letras o números',
          PASSWORDS_NOT_MATCH: 'Las contraseñas no coinciden'
        },
        SUCCESS: {
          PASSWORD_CHANGED:
            '¡La contraseña ha sido modificada con éxito! Dirígete a la pantalla de iniciar sesión para acceder a la herramienta'
        }
      },
      REMEMBER_PASSWORD_TITLE: 'Recuperar contraseña',
      ERRORS: {
        GENERIC_ERROR: 'Ha habido un error técnico. Vuelve a iniciar el proceso para recuperar tu contraseña.'
      },
      INFO: '<strong>¿No eres cliente aún?</strong> <a href="xxxxxx" target="_blank">Pide más información</a> y empieza a disfrutar de una gestión mucho más eficiente.'
    },
    URLS: {
      ROOT: '/u/login',
      ROOT_CIS: '/u/id/login'
    }
  }
}
