import MoleculePhotoUploader from '@s-ui/react-molecule-photo-uploader'

import IconDelete from '../Icons/IconDelete.js'
import IconDragAndDrop from '../Icons/IconDragAndDrop.js'
import IconInfo from '../Icons/IconInfo.js'
import IconPlusPrimary from '../Icons/IconPlusPrimary.js'
import IconReject from '../Icons/IconReject.js'
import IconRetry from '../Icons/IconRetry.js'
import IconRotate from '../Icons/IconRotate.js'

const _infoIcon = () => <IconInfo />
const _rotateIcon = () => <IconRotate />
const _deleteIcon = () => <IconDelete />
const _dragPhotosIcon = () => <IconDragAndDrop />
const _rejectPhotosIcon = () => <IconReject />
const _addMorePhotosIcon = () => <IconPlusPrimary />
const _retryErrorPhotosIcon = () => <IconRetry />

const Images = ({field}) => {
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Input sui-FormBuilder-${field.id}`}
    >
      <MoleculePhotoUploader
        // Icons (required props)
        addMorePhotosIcon={_addMorePhotosIcon}
        deleteIcon={_deleteIcon}
        dragPhotosIcon={_dragPhotosIcon}
        infoIcon={_infoIcon}
        rejectPhotosIcon={_rejectPhotosIcon}
        retryIcon={_retryErrorPhotosIcon}
        rotateIcon={_rotateIcon}
        // Texts (required props)
        addPhotoTextButton="Seleccionalas de tu dispositivo"
        addPhotoTextSkeleton="Añadir más"
        dragPhotoTextInitialContent="Arrastra las fotos aquí"
        dropPhotosHereText="Suelta las fotos aquí"
        errorFileExcededMaxSizeText="Las fotografías deben tener un peso máximo de 50 MB"
        errorFormatPhotoUploadedText="Las fotografías deben tener formato JPEG, PNG, GIF, BMP o WEBP"
        errorInitialPhotoDownloadErrorText="Error al descargar imágenes"
        notificationErrorFormatPhotoUploaded="Sólo se aceptan los formatos: formato JPEG, PNG, GIF, BMP o WEBP"
        uploadingPhotosText="Subiendo imágenes..."
        errorCorruptedPhotoUploadedText="Archivo %{filepath} ha fallado"
        // Not required props
        callbackPhotosRejected={rejectedPhotos => console.log(rejectedPhotos)}
        callbackPhotosUploaded={acceptedPhotos => console.log(acceptedPhotos)}
        callbackUploadPhoto={(file, oldUrl) => console.log(file, oldUrl)}
        limitPhotosUploadedText="Máximo de fotos subidas"
        limitPhotosUploadedNotification="Maxímo de 10 fotos subidas"
        mainPhotoLabel="PRINCIPAL"
        maxPhotos={10}
        rotationDirection="clockwise"
        initialPhotos={field?.values}
      />
    </div>
  )
}

export default Images
