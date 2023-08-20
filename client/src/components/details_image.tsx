
export const DetailsImage =(props:any) =>{

const image:Image = props.image;
    return <div>
    <button title="details" className="btn" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseDetails"+image.idimage} aria-expanded="false" aria-controls="collapseWidthExample">
    <i  className="bi bi-list"></i>
    </button>
  <div >
    <div className="collapse collapse-horizontal" id={"collapseDetails"+image.idimage}>
      <div className="z-3 position-absolute card card-body">
      <div>
        <div>name:{image.image_name}</div>
        <div>category:{image.category?.category_description}</div>
        <div>persons:</div>
        {image._.map((person)=><p key={person.idperson}>{person.person_name}</p>)}
    </div>      </div>
    </div>
  </div>
  </div>
    
    
    
}