
import axios from 'axios';
import FileSaver from 'file-saver';
import fileDownload from 'js-file-download'
export const DownloadImage = (props: any) => {
  const img = props.image;
  const handleDownload = (url: string, filename: string) => {
    const url2: any = fileDownload(url, `${filename}.jpg`);
    axios.get(url2, {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "POST, GET, PUT",
        "Access-Control-Allow-Headers": "Content-Type Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
      responseType: 'blob',
    },)
      .then((res) => {
        console.log("res", res);
        fileDownload(res.data, filename);
        FileSaver.saveAs(res.data, filename);
      }).catch((err) => {
        console.log("err", err)
      }
      )
  }
  return <div>
    <button title="download" className="btn" onClick={() => handleDownload(img.image_url, img.image_name)}><i className="bi bi-download" title='download link'></i></button>
  </div>
}