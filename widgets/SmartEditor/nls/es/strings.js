define({
  "_widgetLabel": "Editor inteligente",
  "_featureAction_SmartEditor": "Editor inteligente",
  "noEditPrivileges": "Su cuenta no tiene permiso para crear o modificar datos.",
  "loginPopupTitle": "Inicie sesión",
  "loginPopupMessage": "${widgetName} requiere permisos y créditos para buscar y almacenar información de direcciones. ¿Desea iniciar sesión y utilizar esta funcionalidad?",
  "noCreditsOrPrivilegeWarningMessage": "Su cuenta no tiene los permisos y créditos para buscar y almacenar información de direcciones con ${widgetName}. Póngase en contacto con el administrador de su organización para solicitar permisos y créditos. Haga clic en Aceptar para seguir editando.",
  "unableToUseLocator": "El localizador no está accesible. Las acciones de los atributos de dirección no se realizarán. Haga clic en Aceptar para seguir editando.",
  "locatorDisabledWaning": "El localizador no está habilitado. Póngase en contacto con el administrador de su organización para solicitar esta funcionalidad. Haga clic en Aceptar para seguir editando.",
  "noFeatureInAIWarning": "Ninguna entidad seleccionada. Seleccione una entidad para realizar ediciones o haga clic en cancelar para volver a la pantalla principal.",
  "noEditableLayerWarning": "Su cuenta no tiene permiso para crear o modificar datos, o bien este mapa web no contiene ninguna capa editable.",
  "noVisibleCreateLayerWarning": "Capa(s) no visible(s) en el nivel de zoom actual. Acérquese o aléjese para crear/modificar entidades.",
  "noVisibleUpdateLayerWarning": "Capa(s) no visible(s) en el nivel de zoom actual. Acérquese o aléjese para modificar entidades.",
  "checkLayerVisibilityInWebMapWarning": "Asegúrese de que las capas son visibles en el mapa para crear o modificar entidades.",
  "showSelectionInAITitle": "Entidades seleccionadas",
  "showSelectionInAIMsg": "¿Desea cargar la selección actual en ${widgetName}?",
  "widgetActive": "Activa",
  "widgetNotActive": "No activa",
  "pressStr": "Pulsar ",
  "ctrlStr": " CTRL ",
  "snapStr": " para activar la alineación",
  "noAvailableTempaltes": "No hay plantillas disponibles",
  "editorCache": " - Caché del editor",
  "presetFieldAlias": "Campo",
  "presetValue": "Valor predefinido",
  "usePresetValues": " Usar valores predefinidos (solo nuevas entidades)",
  "editGeometry": " Editar geometría",
  "savePromptTitle": "Guardar entidad",
  "savePrompt": "¿Desea guardar la entidad actual?",
  "deletePromptTitle": "Eliminar entidad",
  "deleteAttachment": "Eliminar adjunto",
  "deletePrompt": "¿Está seguro de que desea eliminar la entidad seleccionada?",
  "attachmentLoadingError": "Error al cargar adjuntos",
  "attachmentSaveDeleteWarning": "Advertencia: los cambios realizados en los adjuntos se guardan automáticamente",
  "autoSaveEdits": "Guardar nueva entidad automáticamente",
  "addNewFeature": "Crear entidad nueva",
  "featureCreationFailedMsg": "Imposible crear un nuevo registro/entidad",
  "relatedItemTitle": "Tabla/capa relacionada",
  "relatedFeatureCount": "${layerTitle} con ${featureCount} entidades",
  "createNewFeatureLabel": "Crear una nueva entidad para ${layerTitle}",
  "invalidRelationShipMsg": "Asegúrese de que el campo clave principal: '${parentKeyField}' tenga un valor válido",
  "pendingFeatureSaveMsg": "Guarde las ediciones de las entidades antes de crear una entidad relacionada.",
  "attachmentsRequiredMsg": "(*) Se requieren adjuntos.",
  "coordinatePopupTitle": "Mover la entidad a ubicación XY",
  "coordinatesSelectTitle": "Sistema de coordenadas:",
  "mapSpecialReferenceDropdownOption": "Asignar referencia espacial",
  "latLongDropdownOption": "Latitud/longitud",
  "mgrsDropdownOption": "Sistema de Referencia de Cuadrícula Militar de EE. UU. (MGRS)",
  "mgrsTextBoxLabel": "Coordenada:",
  "xAttributeTextBoxLabel": "Coordenada X:",
  "yAttributeTextBoxLabel": "Coordenada Y:",
  "latitudeTextBoxLabel": "Latitud:",
  "longitudeTextBoxLabel": "Longitud:",
  "presetGroupFieldsLabel": "Se aplicará '${groupName}' a los siguientes campos de capa:",
  "presetGroupNoFieldsLabel": "'${groupName}' no tiene ningún campo asociado",
  "groupInfoLabel": "Información de grupo para '${groupName}'",
  "editGroupInfoIcon": "Editar el valor de grupo para ${groupName}",
  "filterEditor": {
    "all": "Todo",
    "noAvailableTempaltes": "No hay plantillas disponibles",
    "searchTemplates": "Buscar plantillas",
    "filterLayerLabel": "Filtrar capas"
  },
  "invalidConfiguration": "El widget no está configurado o las capas de la configuración ya no están en el mapa. Abra la aplicación en el modo de builder y vuelva a configurar el widget.",
  "geometryServiceURLNotFoundMSG": "No se puede obtener la dirección URL del servicio de geometría",
  "clearSelection": "Cerrar",
  "refreshAttributes": "Actualizar atributos de entidad dinámicos",
  "automaticAttributeUpdatesOn": "Actualizar atributos de entidad automáticamente: SÍ",
  "automaticAttributeUpdatesOff": "Actualizar atributos de entidad automáticamente: NO",
  "moveSelectedFeatureToGPS": "Mover la entidad seleccionada a la ubicación GPS actual",
  "moveSelectedFeatureToXY": "Mover la entidad seleccionada a ubicación XY",
  "mapNavigationLocked": "Navegación de mapa: bloqueada",
  "mapNavigationUnLocked": "Navegación de mapa: desbloqueada",
  "copyFeatures": {
    "title": "Seleccionar las entidades a copiar",
    "createFeatures": "Crear entidades",
    "createSingleFeature": "Crear 1 entidad multiparte",
    "createOneSingleFeature": "Crear entidad",
    "noFeaturesSelectedMessage": "No hay entidades seleccionadas",
    "selectFeatureToCopyMessage": "Seleccione entidades para copiarlas",
    "multipleFeatureSaveWarning": "La creación de varias entidades mediante esta funcionalidad guarda todas las entidades de forma inmediata No se admite la coincidencia de campos cuando se crea una nueva entidad de varias partes.",
    "copyFeatureUpdateGeometryError": "No se puede actualizar la geometría de entidades seleccionadas",
    "canNotSaveMultipleFeatureWarning": "No se pueden copiar varias entidades utilizando el mismo valor para los campos de valor único; seleccione solo una entidad",
    "createOnlyOneMultipartFeatureWarning": "Solo se puede crear una entidad multiparte",
    "layerLabel": "${layerName} (${selectedFeatures}/${totalFeatures})",
    "layerAriaLabel": "${layerName} ${selectedFeatures} de ${totalFeatures} entidades seleccionadas"
  },
  "addingFeatureError": "Error al agregar las entidades seleccionadas en la capa. Inténtelo de nuevo.",
  "addingFeatureErrorCount": "Error al copiar \"${copyFeatureErrorCount}\" entidad(es) ¿Desea intentarlo de nuevo para las entidades faltantes?",
  "selectingFeatureError": "Error al seleccionar las entidades en la capa. Inténtelo de nuevo.",
  "customSelectOptionLabel": "Seleccionar las entidades a copiar",
  "copyFeaturesWithPolygon": "Copiar por polígono",
  "copyFeaturesWithRect": "Copiar por rectángulo",
  "copyFeaturesWithLasso": "Copiar por lazo",
  "noFeatureSelectedMessage": "Ninguna entidad seleccionada",
  "multipleFeatureSaveMessage": "Todas las entidades se guardarán de inmediato. ¿Desea continuar?",
  "relativeDates": {
    "dateTypeLabel": "Tipo de datos",
    "valueLabel": "Valor",
    "fixed": "Fijo",
    "current": "Actual",
    "past": "Pasado",
    "future": "Futuro",
    "popupTitle": "Seleccione un valor",
    "hintForFixedDateType": "Sugerencia: La fecha y la hora especificadas se utilizan como valor predeterminado de la configuración predefinida.",
    "hintForCurrentDateType": "Sugerencia: La fecha y la hora actuales se utilizan como valor predeterminado de la configuración predefinida.",
    "hintForPastDateType": "Sugerencia: El valor especificado se resta de la fecha y hora actuales en el valor predeterminado de la configuración predefinida.",
    "hintForFutureDateType": "Sugerencia: El valor especificado se suma a la fecha y hora actuales en el valor predeterminado de la configuración predefinida.",
    "noDateDefinedTooltip": "No hay ninguna fecha definida",
    "relativeDateWarning": "Se debe especificar un valor de hora o fecha para poder guardar el valor preestablecido predeterminado.",
    "customLabel": "Personalizada",
    "layerLabel": "Capa",
    "domainFieldHintLabel": "El valor seleccionado es un dominio de valor codificado. Se utilizará el valor \"${domainValue}\""
  },
  "valuePicker": {
    "popupTitle": "Seleccione un valor",
    "popupHint": "La entidad actual interseca varias entidades, elija el valor para el campo correspondiente",
    "buttonTooltip": "Seleccionar valor desde varias entidades de intersección"
  },
  "uniqueValueErrorMessage": "El valor de \"${fieldName}\" ya existe, proporcione un nuevo valor.",
  "requiredFields": {
    "displayMsg": "Los campos obligatorios no pueden estar en blanco. Proporcione valores para los campos comunes que se muestran a continuación.",
    "popupTittle": "Campos requeridos",
    "foundNullRecordCount": "${fieldName} (Encontrado en ${count} registros)"
  },
  "fieldsMapping": {
    "popupTittle": "Aplicar coincidencia de campos",
    "fieldsMatchingCheckboxLabel": "Los valores de la entidad o entidades copiados invalidan los valores predeterminados de los campos de destino",
    "resetLabel": "Restablecer",
    "clearLabel": "Borrar",
    "fieldsInTargetLayerLabel": "Destino",
    "fieldsInSourceLayerLabel": "Fuente",
    "targetFieldsMatchedLabel": "${layerName} (${matchedFields}/${totalFields} campos coincidentes)",
    "selectSourceFieldLabel": "- Seleccionar -",
    "selectFieldAriaLabel": "Seleccione el campo de origen para el campo de destino ${targetField}",
    "informativeText": "Revise los campos que coinciden entre el origen y el destino y personalícelos si es necesario.",
    "dynamicValueText": "Se establece un valor dinámico",
    "noFieldsToMatchLabel": "No hay campos que correlacionar"
  },
  "cantLocateUserLocation": "No se pudo determinar su ubicación",
  "tryAgainButtonLabel": "Volver a intentar",
  "copyFeatureFailedPopupTitle": "¡Ups!"
});