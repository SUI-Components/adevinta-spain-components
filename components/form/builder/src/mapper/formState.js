export const getUpdatedFormState = (actualForm, nextStateFields) => ({
  form: {
    ...actualForm,
    fields: nextStateFields
  }
})
