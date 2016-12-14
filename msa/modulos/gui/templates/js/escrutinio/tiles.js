var pantallas = [
    {"id": "pantalla_inicial",
     "template": "pantalla_inicial",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_derecho"],
     "pantalla_siguiente": finalizar_recuento_boletas,
    },
    {"id": "pantalla_loader",
     "template": "loading",
     "context_tiles": ["panel_estado", "panel_blanco"],
     "template_data_callback": popular_loader,
    },
    {"id": "pantalla_boleta",
     "template": "pantalla_boleta",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_derecho"],
     "pantalla_siguiente": finalizar_recuento_boletas,
    },
    {"id": "pantalla_boleta_error",
     "template": "pantalla_boleta_error",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_derecho"],
     "pantalla_siguiente": finalizar_recuento_boletas,
    },
    {"id": "pantalla_boleta_clonada",
     "template": "pantalla_boleta_clonada",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_derecho"],
     "pantalla_siguiente": finalizar_recuento_boletas,
    },
    {"id": "pantalla_boleta_repetida",
     "template": "pantalla_boleta_repetida",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_derecho"],
     "pantalla_siguiente": finalizar_recuento_boletas,
    },
    {"id": "mensaje_pocas_boletas",
     "template": "mensaje_pocas_boletas",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_acciones", "panel_blanco"],
    },
    {"id": "pantalla_clasificacion_votos",
     "template": "pantalla_clasificacion_votos",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_clasificacion"],
     "pantalla_anterior": volver_al_recuento,
     "pantalla_siguiente": mensaje_fin_escrutinio,
    },
    {"id": "mensaje_salir",
     "template": "mensaje_salir",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_acciones", "panel_blanco"],
    },
    {"id": "mensaje_fin_escrutinio",
     "template": "mensaje_fin_escrutinio",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_acciones", "panel_blanco"],
    },
    {"id": "mensaje_confirmar_apagar",
     "template": "mensaje_confirmar_apagar",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_acciones", "panel_blanco"],
    },
    {"id": "pantalla_pedir_acta",
     "template": "pedir_acta",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_blanco"],
    },
    {"id": "mensaje_imprimiendo",
     "template": "imprimiendo",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_blanco"],
    },
    {"id": "pantalla_copias",
     "template": "copias",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_copias"],
    },
];

var slides_asistente = [
    {"id": "slide_firmar_acta",
     "template": "slides/firmar_acta",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_asistente", "panel_finalizar"],
    },
    {"id": "slide_certificados_extra",
     "template": "slides/certificados_extra",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_asistente", "panel_finalizar"],
    },
    {"id": "slide_devolucion_urna",
     "template": "slides/devolucion_urna",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_asistente", "panel_finalizar"],
    },
    {"id": "slide_devolucion_sobre",
     "template": "slides/devolucion_sobre",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_asistente", "panel_finalizar"],
    },
    {"id": "slide_qr_fiscales",
     "template": "slides/qr_fiscales",
     "context_tiles": ["tabla_resultados", "panel_estado", "panel_asistente", "panel_finalizar"],
    },
];

var contexto = [
    {"id": "tabla_resultados",
     "container": "#tabla",
     "template": "tabla",
    },
    {"id": "panel_estado",
     "container": "#barra_acciones_recuento",
     "template": "panel_estado",
     "template_data_callback": popular_panel_estado,
    },
    {"id": "panel_derecho",
     "container": "#barra_acciones_recuento",
     "template": "panel_derecho",
    },
    {"id": "panel_acciones",
     "container": "#contenedor_datos",
     "template": "panel_acciones",
    },
    {"id": "panel_finalizar",
     "container": "#contenedor_datos",
     "template": "panel_finalizar",
    },
    {"id": "panel_clasificacion",
     "container": "#barra_acciones_recuento",
     "template": "panel_clasificacion",
    },
    {"id": "panel_asistente",
     "container": "#barra_acciones_recuento",
     "template": "panel_asistente",
    },
    {"id": "panel_copias",
     "container": "#barra_acciones_recuento",
     "template": "panel_copias",
    },
    {"id": "panel_blanco",
     "container": "#barra_acciones_recuento",
     "template": "panel_blanco",
    },
    {"id": "teclado_flechas",
     "container": "#teclado",
     "template": "teclado",
    }
];