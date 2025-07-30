const preloadAssets = (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      const extension = url.split('.').pop().toLowerCase();
      if (['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(extension)) {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
        const video = document.createElement('video');
        video.src = url;
        video.oncanplaythrough = resolve;
        video.onerror = reject;
        video.load();
      } else {
        // For other file types like fonts, we can use the fetch API
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.blob();
          })
          .then(resolve)
          .catch(reject);
      }
    });
  });

  return Promise.all(promises);
};

export default preloadAssets;
