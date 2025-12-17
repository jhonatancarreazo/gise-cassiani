export default function ShareButtons({ title }) {
  const url = window.location.href;
  const text = `${title} 💗`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert('Link copiado 💕');
  };

  return (
    <div className="share">
      <p className="share-title">💗 Compartir este momento</p>

      <div className="share-buttons">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          Facebook
        </a>

        <button onClick={copyLink} className="share-btn outline">
          Copiar link
        </button>
      </div>
    </div>
  );
}
