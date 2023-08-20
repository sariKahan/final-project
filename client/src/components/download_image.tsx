import { saveAs } from 'file-saver'
// var FileSaver = require('file-saver');


export const DownloadImage = (props: any) => {
  const img: Image = props.image;
  const downloadImage = () => {
    const imgElement = document.createElement('img');
    imgElement.src = img.image_url;
    imgElement.hidden = true;
    const el = document.querySelector('.download');
    (el as Element).append(imgElement);
    const url = URL.createObjectURL(new Blob([imgElement.src], { type: 'image/jpeg' }));
    saveAs(url, `${props.image.image_name}`)
  }
  return <div className='download'>
    <button title='download' className="btn" onClick={() => downloadImage()}><i className="bi bi-download"></i></button>
  </div>
}
