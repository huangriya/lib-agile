export const escapeHtml = (str: string) => {
  const hash: any = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }
  return str.replace(/[&<>'"]/g, (tag) => hash[tag] || tag)
}
