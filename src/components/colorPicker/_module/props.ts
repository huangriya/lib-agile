const props = {
  theme: {
    type: String,
    default: 'light', // light ||dark,
  },
  color: {
    type: String,
    default: '#000000',
  },
  quickColorsDefault: {
    type: Array,
    default: () => [
      '#000000',
      '#FFFFFF',
      '#FF1900',
      '#F47365',
      '#FFB243',
      '#FFE623',
      '#6EFF2A',
      '#1BC7B1',
      '#00BEFF',
      '#2E81FF',
      '#5D61FF',
      '#FF89CF',
      '#FC3CAD',
      '#BF3DCE',
      '#8E00A7',
      'rgba(0,0,0,0)',
    ],
  },
}

export default props
